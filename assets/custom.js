// custom.js
document.addEventListener('page:loaded', function() {
    // Crossout 'Sold Out' colour variants
    var sizeChecked = $("input[data-index=option1]:checked").val();
    var colorChecked = $("input[data-index=option2]:checked").val();
    var soldOutArr = [];
    var variantColor;

    function disbableSoldOut() {
        $('.product-single__variants option').each(function(){
            if (this.text.split(' ')[0] == sizeChecked) {
                if (this.text.includes("Sold Out")) {
                    variantColor = this.text.split(/\/\s|\s-/);
                    soldOutArr.push(variantColor[1]);
                };
            };
        });
        for(var i = 0; i < soldOutArr.length; i++) {
            $("[data-value='" + soldOutArr[i] + "'] label").addClass('disabled');
        };
    };
    disbableSoldOut();

    document.addEventListener('variant:change', function(evt) {
        var newSizeChecked = $("input[data-index=option1]:checked").val()
        if (sizeChecked !== newSizeChecked) {
            for(var i = 0; i < soldOutArr.length; i++) {
                $("[data-value='" + soldOutArr[i] + "'] label").removeClass('disabled');
            }
            sizeChecked = newSizeChecked;
            soldOutArr = [];
            disbableSoldOut()
        };
    });

    //Event listener to adjust visibility of notify me and add to cart button
    //This event should only fire for default product template
    var bundleTemplate = document.getElementById("shopify-section-product-bundle-template");
    if (!bundleTemplate) {
        document.addEventListener('variant:change', function(evt) {
            var variant = evt.detail.variant;

            // if variant available
            if(variant && variant.available) {
                // - hide notify
                // - show default button
                $('#BIS_trigger').addClass('hide');
                $('#BIS_trigger').hide();
                $('.add-to-cart').show();
                $('.add-to-cart').removeClass('hide');
            } else {
                // show the button and set the default variant
                // - show notify
                // - hide default sold out
                $('#BIS_trigger').show().attr('data-variant-id', variant.id);
                $('#BIS_trigger').removeClass('hide');
                $('.add-to-cart').addClass('hide')
                $('.add-to-cart').hide();
            }
        });
    }

    //This event should only fire for the bundle template
    if (bundleTemplate) {
        document.addEventListener('variant:change', function(evt) {
            // Get value of both option (color and size) that are selected
            var sizeChecked = $("input[data-index=option1]:checked").val();
            var colorChecked = $("input[data-index=option2]:checked").val();

            // Check if a dropdown option is enabled and contains the size and color
            var selection = sizeChecked + " / " + colorChecked;
            var variantAvailability;
            $('#ProductSelect option').each(function(){
                if (this.innerHTML.includes(selection)) {
                    if (this.innerHTML.includes("Sold Out")) {
                        variantAvailability = "this is sold out";
                        soldOutArr.push(selection);
                        $('.add-to-cart').addClass('hide')
                        $('.add-to-cart').hide();
                        $('#BIS_trigger').removeClass('hide');
                        $('#BIS_trigger').show();
                        this.selected = true;
                    } else {
                        variantAvailability = "this available";
                        $('.add-to-cart').show();
                        $('.add-to-cart').removeClass('hide');
                        $('.add-to-cart').removeClass('disabled');
                        $('#BIS_trigger').hide();
                        $('.add-to-cart').removeAttr('disabled');
                        $('.add-to-cart').html('Add to cart');
                        // Make hidden option selected
                        this.selected = true;
                    }
                } 
            });

            // Update price
            var updatedPrice = $('#ProductSelect option:checked').attr('data-price');
            $(".product__price").html("$ " + updatedPrice);

        });
    };

  });

(function() {
    var badgeCache = {};
    var hydrationTimer = null;

    function escapeAttribute(value) {
        return String(value || '')
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    function getBadgeHolder(card) {
        var holder = card.querySelector('.product-badges');
        if (holder) {
            return holder;
        }

        var content = card.querySelector('.grid-product__content');
        if (!content) {
            return null;
        }

        holder = document.createElement('div');
        holder.className = 'product-badges';
        content.insertBefore(holder, content.firstChild);
        return holder;
    }

    function renderBadges(card, badges) {
        var holder = getBadgeHolder(card);
        if (!holder) {
            return;
        }

        badges = Array.isArray(badges) ? badges.slice(0, 3) : [];
        if (!badges.length) {
            holder.innerHTML = '';
            holder.style.removeProperty('--badge-count');
            return;
        }

        holder.style.setProperty('--badge-count', badges.length);
        holder.innerHTML = badges.map(function(badge) {
            if (!badge || !badge.image) {
                return '';
            }

            return '<div class="product-badge"><img height="50" width="50" src="' +
                escapeAttribute(badge.image) +
                '" alt="' +
                escapeAttribute(badge.title) +
                '" loading="lazy"></div>';
        }).join('');
    }

    function fetchBadges(handle) {
        if (badgeCache[handle]) {
            return badgeCache[handle];
        }

        badgeCache[handle] = fetch('/products/' + encodeURIComponent(handle) + '?view=badges-json', {
            credentials: 'same-origin'
        }).then(function(response) {
            if (!response.ok) {
                return [];
            }

            return response.json();
        }).catch(function() {
            return [];
        });

        return badgeCache[handle];
    }

    function hydrateProductBadges(root) {
        root = root || document;

        var cards = root.querySelectorAll('.grid-product[data-product-handle][data-product-id]:not([data-badges-hydrated])');
        cards.forEach(function(card) {
            var handle = card.getAttribute('data-product-handle');
            if (!handle) {
                return;
            }

            card.setAttribute('data-badges-hydrated', 'true');
            fetchBadges(handle).then(function(badges) {
                renderBadges(card, badges);
            });
        });
    }

    function scheduleHydration() {
        clearTimeout(hydrationTimer);
        hydrationTimer = setTimeout(function() {
            hydrateProductBadges(document);
        }, 100);
    }

    document.addEventListener('DOMContentLoaded', scheduleHydration);
    document.addEventListener('page:loaded', scheduleHydration);

    if (window.MutationObserver) {
        new MutationObserver(scheduleHydration).observe(document.documentElement, {
            childList: true,
            subtree: true
        });
    }
})();
