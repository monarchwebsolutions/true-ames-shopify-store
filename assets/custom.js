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

