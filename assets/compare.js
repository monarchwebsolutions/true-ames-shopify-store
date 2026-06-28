function waitForjQuery(callback) {
    if (window.jQuery) {
        callback();
    } else {
        setTimeout(function() {
            waitForjQuery(callback);
        }, 100);
    }
}

document.addEventListener('DOMContentLoaded', function() {
  waitForjQuery(function(){
    jQuery('.compare-container table tbody input[type="checkbox"]').click(function (e) {
      jQuery('.show-stats').css('visibility','visible');
      if(jQuery(this).is(':checked')){
        showTwinFin(jQuery(this).attr('data-id'));
      } else {
        hideTwinFin(jQuery(this).attr('data-id'));
      }    
    });
  
    const dropdowns = document.getElementsByClassName('dropdown');
  
    for (let i = 0; i < dropdowns.length; i++) {
      let dropdown = dropdowns[i];
      let button = dropdown.getElementsByClassName('dropdown-button')[0];
      button.addEventListener('click', function() {
        dropdown.classList.toggle('show');
      });
      // Close the dropdown if the user clicks outside of it
      window.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
          dropdown.classList.remove('show');
        }
      });
    }
    
    let totalTwinsSelected = {value: 0};
    let totalTrisSelected = {value: 0};
    let totalQuadsSelected = {value: 0};
    let totalTwinzersSelected = {value: 0};
    let totalTrailersSelected = {value: 0};
    let totalSideBitesSelected = {value: 0};
  
    function showTwinFin(product_id) {
      // Select the element with the class "fins-shapes" and the specified data-id
      const currentShape = document.querySelector(`.fins-shapes[data-id='${product_id}']`);
      
      if (currentShape) {
        // Make the element visible by setting its display property to "block"
        currentShape.style.display = 'block';
      } else {
        console.error(`Element with data-id='${product_id}' not found.`);
      }
    }
    function showTriFin(product_id) {
      // Select the element with the class "fins-shapes" and the specified data-id
      const frontFin = document.querySelector(`.tri-front-shapes[data-id='${product_id}']`);
      const rearFin = document.querySelector(`.tri-rear-shapes[data-id='${product_id}']`);
      if (frontFin) {
        // Make the element visible by setting its display property to "block"
        frontFin.style.display = 'block';
      } else {
        console.error(`Element with data-id='${product_id}' not found.`);
      }
      if (rearFin) {
        // Make the element visible by setting its display property to "block"
        rearFin.style.display = 'block';
      } else {
        console.error(`Element with data-id='${product_id}' not found.`);
      }
    }
    function showQuadFin(product_id) {
      // Select the element with the class "fins-shapes" and the specified data-id
      const frontFin = document.querySelector(`.quad-front-shapes[data-id='${product_id}']`);
      const rearFin = document.querySelector(`.quad-rear-shapes[data-id='${product_id}']`);
      if (frontFin) {
        // Make the element visible by setting its display property to "block"
        frontFin.style.display = 'block';
      } else {
        console.error(`Element with data-id='${product_id}' not found.`);
      }
      if (rearFin) {
        // Make the element visible by setting its display property to "block"
        rearFin.style.display = 'block';
      } else {
        console.error(`Element with data-id='${product_id}' not found.`);
      }
    }
    function showTwinzerFin(product_id) {
      // Select the element with the class "fins-shapes" and the specified data-id
      const frontFin = document.querySelector(`.twinzer-front-shapes[data-id='${product_id}']`);
      const rearFin = document.querySelector(`.twinzer-rear-shapes[data-id='${product_id}']`);
      if (frontFin) {
        // Make the element visible by setting its display property to "block"
        frontFin.style.display = 'block';
      } else {
        console.error(`Element with data-id='${product_id}' not found.`);
      }
      if (rearFin) {
        // Make the element visible by setting its display property to "block"
        rearFin.style.display = 'block';
      } else {
        console.error(`Element with data-id='${product_id}' not found.`);
      }
    }
    function showTrailerFin(product_id) {
      // Select the element with the class "trailer-shapes" and the specified data-id
      const currentShape = document.querySelector(`.trailer-shapes[data-id='${product_id}']`);
      
      if (currentShape) {
        // Make the element visible by setting its display property to "block"
        currentShape.style.display = 'block';
      } else {
        console.error(`Element with data-id='${product_id}' not found.`);
      }
    }
    function showSideBiteFin(product_id) {
      // Select the element with the class "side-bite-shapes" and the specified data-id
      const currentShape = document.querySelector(`.side-bite-shapes[data-id='${product_id}']`);
      
      if (currentShape) {
        // Make the element visible by setting its display property to "block"
        currentShape.style.display = 'block';
      } else {
        console.error(`Element with data-id='${product_id}' not found.`);
      }
    }
    
    function hideTwinFin(product_id) {
      // Select the element with the class "fins-shapes" and the specified data-id
      const currentShape = document.querySelector(`.fins-shapes[data-id='${product_id}']`);
      
      if (currentShape) {
        // Hide the element by setting its display property to "none"
        currentShape.style.display = 'none';
      } else {
        console.error(`Element with data-id='${product_id}' not found.`);
      }
    }
    function hideTriFin(product_id) {
      // Select the element with the class "fins-shapes" and the specified data-id
      const frontFin = document.querySelector(`.tri-front-shapes[data-id='${product_id}']`);
      const rearFin = document.querySelector(`.tri-rear-shapes[data-id='${product_id}']`);
      if (frontFin) {
        // Hide the element by setting its display property to "none"
        frontFin.style.display = 'none';
      } else {
        console.error(`Element with data-id='${product_id}' not found.`);
      }
      if (rearFin) {
        // Hide the element by setting its display property to "none"
        rearFin.style.display = 'none';
      } else {
        console.error(`Element with data-id='${product_id}' not found.`);
      }
    }
    function hideQuadFin(product_id) {
      // Select the element with the class "fins-shapes" and the specified data-id
      const frontFin = document.querySelector(`.quad-front-shapes[data-id='${product_id}']`);
      const rearFin = document.querySelector(`.quad-rear-shapes[data-id='${product_id}']`);
      if (frontFin) {
        // Hide the element by setting its display property to "none"
        frontFin.style.display = 'none';
      } else {
        console.error(`Element with data-id='${product_id}' not found.`);
      }
      if (rearFin) {
        // Hide the element by setting its display property to "none"
        rearFin.style.display = 'none';
      } else {
        console.error(`Element with data-id='${product_id}' not found.`);
      }
    }
    function hideTwinzerFin(product_id) {
      // Select the element with the class "fins-shapes" and the specified data-id
      const frontFin = document.querySelector(`.twinzer-front-shapes[data-id='${product_id}']`);
      const rearFin = document.querySelector(`.twinzer-rear-shapes[data-id='${product_id}']`);
      if (frontFin) {
        // Hide the element by setting its display property to "none"
        frontFin.style.display = 'none';
      } else {
        console.error(`Element with data-id='${product_id}' not found.`);
      }
      if (rearFin) {
        // Hide the element by setting its display property to "none"
        rearFin.style.display = 'none';
      } else {
        console.error(`Element with data-id='${product_id}' not found.`);
      }
    }
    function hideTrailerFin(product_id) {
      // Select the element with the class "fins-shapes" and the specified data-id
      const currentShape = document.querySelector(`.trailer-shapes[data-id='${product_id}']`);
      
      if (currentShape) {
        // Hide the element by setting its display property to "none"
        currentShape.style.display = 'none';
      } else {
        console.error(`Element with data-id='${product_id}' not found.`);
      }
    }

    function hideSideBiteFin(product_id) {
      // Select the element with the class "fins-shapes" and the specified data-id
      const currentShape = document.querySelector(`.side-bite-shapes[data-id='${product_id}']`);
      
      if (currentShape) {
        // Hide the element by setting its display property to "none"
        currentShape.style.display = 'none';
      } else {
        console.error(`Element with data-id='${product_id}' not found.`);
      }
    }

    function highlightSelector(selector_id, selector_array) {
      // finSelectors[selector_id].style.boxShadow = "0px 4px 4px 0px #8A78781C";
      selector_array[selector_id].style.border = "1px solid #D0CFCF";
      selector_array[selector_id].style.fontWeight = "bold";
    }
    function addXButton(selector_id, container_class, class_name, selector_array, chart_container, checkbox_array, fin_type, selected) {
      let buttonContainers = document.getElementsByClassName(container_class);
  
      // Loop through each button container
      for (let i = 0; i < buttonContainers.length; i++) {
        // Create a new xButtonBox for each container
        let xButtonBox = document.createElement("div");
        xButtonBox.classList.add(class_name);
        xButtonBox.classList.add(`${class_name}-${selector_id}`);
  
        let xColorBox = document.createElement('span');
        xColorBox.classList.add('chart-color-box');
        xColorBox.style.backgroundColor = selector_array[selector_id].querySelector('span.filled').style.backgroundColor;
  
        let xButtonTitle = document.createElement("span");
        xButtonTitle.innerHTML = selector_array[selector_id].querySelector(`.${fin_type}-selection-title`).innerText;
  
        let xButton = document.createElement("span");
        xButton.classList.add('x-out-button');
        xButton.innerHTML = "X";
        xButton.addEventListener("click", function() { 
          checkbox_array[selector_id].checked = !checkbox_array[selector_id].checked;
          if (fin_type == "twin"){
            hideTwinFin(finCheckboxes[selector_id].getAttribute('data-id'));
          } else if (fin_type == "tri"){
            hideTriFin(finCheckboxes[selector_id].getAttribute('data-id'));
          } else if (fin_type == "quad"){
            hideQuadFin(finCheckboxes[selector_id].getAttribute('data-id'));
          }else if (fin_type == "twinzer"){
            hideTwinzerFin(finCheckboxes[selector_id].getAttribute('data-id'));
          }else if (fin_type == "trailer"){
            hideTrailerFin(finCheckboxes[selector_id].getAttribute('data-id'));
          }else if (fin_type == "side-bite"){
            hideSideBiteFin(finCheckboxes[selector_id].getAttribute('data-id'));
          }
          removeXButtonBox(class_name, selector_id);  
          resetSelector(selector_id, selector_array);
          removeChart(selector_id, chart_container); 
          selected.value = selected.value - 1;
        });
  
        xButtonBox.appendChild(xColorBox);
        xButtonBox.appendChild(xButtonTitle);
        xButtonBox.appendChild(xButton);
  
        // Append the newly created xButtonBox to the current button container
        buttonContainers[i].appendChild(xButtonBox);
      }
    }
  
    function removeXButtonBox(class_name, selector_id){
      let xButtonBoxes = document.getElementsByClassName(`${class_name}-${selector_id}`);
      xButtonBoxes = Array.from(xButtonBoxes);
      for (let i = 0; i < xButtonBoxes.length; i++) {
        xButtonBoxes[i].remove();
      }
    }
    function resetSelector(selector_id, selector_array) {
      selector_array[selector_id].style.boxShadow = "none";
      selector_array[selector_id].style.border = "none";
      selector_array[selector_id].style.fontWeight = "normal";
    }
    function showChart(class_name, selector_id, selector_array, fin_type) {
      console.log("Show Chart Initiated")
      const container = document.getElementsByClassName(class_name)[0];
      // Create the new chart container
      let newChart = document.createElement('div');
      newChart.id = `${class_name}-chart-${selector_id}`;
      newChart.classList.add('chart-container');
  
      // Create the chart header and title
      let chartHeader = document.createElement('div');
      chartHeader.classList.add('chart-header');
      let chartColorBox = document.createElement('span');
      chartColorBox.classList.add('chart-color-box');
      chartColorBox.style.backgroundColor = selector_array[selector_id].querySelector('span.filled').style.backgroundColor;
      let chartTitle = document.createElement('h3');
      chartTitle.innerText = document.getElementsByClassName(`${fin_type}-selection-title`)[selector_id].innerHTML; 
      chartHeader.appendChild(chartColorBox);
      chartHeader.appendChild(chartTitle);
      newChart.appendChild(chartHeader);
  
      // Definitions for bars and texts
      const barsData = [
        {
          text: "<span class='text-left'><span class='primary-text'>Upright </span>Tight Turns</span><span class='text-right'><span class='primary-text'>Raked </span>Drawn-Out Turns</span>",
          valueClass: 'turns-value'
        },
        {
          text: "<span class='text-left'><span class='primary-text'>Less Area </span>Loose</span><span class='text-right'><span class='primary-text'>More Area </span>Stable</span>",
          valueClass: 'area-value'
        },
        {
          text: "<span class='text-left'><span class='primary-text'>Speed Control </span></span><span class='text-right'><span class='primary-text'>Speed Generating </span>Drive</span>",
          valueClass: 'speed-value'
        },
        {
          text: "<span class='text-left'><span class='primary-text'>Less Flex </span>Responsive</span><span class='text-right'><span class='primary-text'>More Flex </span>Projection</span>",
          valueClass: 'flex-value'
        }
      ];
  
      // Iterate through the barsData to create the bars and fills
      barsData.forEach((barData, index) => {
        let bar = document.createElement('div');
        bar.classList.add('progress-bar');
  
        let fill = document.createElement('div');
        fill.classList.add('fill');
        fill.style.width = container.getElementsByClassName(barData.valueClass)[selector_id].innerHTML + "%";
        bar.appendChild(fill);
  
        let hashMark = document.createElement('div');
        hashMark.classList.add('hash-mark');
        hashMark.style.marginLeft = container.getElementsByClassName(barData.valueClass)[selector_id].innerHTML + "%";
        bar.appendChild(hashMark);
  
        let barText = document.createElement('div');
        barText.classList.add('bar-text');
        barText.innerHTML = barData.text;
  
        newChart.appendChild(bar);
        newChart.appendChild(barText);
      });
  
      // Append the new chart to the document
      document.getElementsByClassName(class_name)[0].appendChild(newChart);
    }
    function removeChart(selector_id, class_name){
      let chartId = `${class_name}-chart-${selector_id}`;
      document.getElementById(chartId).remove();
    }
    function addfillcolor(product_id) {
      var current_shape = jQuery(".fins-shapes[data-id='"+product_id+"']");
      var current_color = jQuery(current_shape).attr('data-color');
      jQuery(current_shape).find('path').css('fill', current_color);
      jQuery(current_shape).css('z-index','0');
    }
    function removefillcolor(product_id) {
      var current_shape = jQuery(".fins-shapes[data-id='"+product_id+"']");
      var current_color = jQuery(current_shape).attr('data-color');
      jQuery(current_shape).find('path').css('fill','transparent');
      jQuery(current_shape).css('z-index','1');
    }
    
    jQuery('.compare-container table tbody span.filled').click(function (e) {
      var product_name = jQuery(this).attr('data-product_name');
      var turns = jQuery(this).attr('data-attribute_turns');
      var area = jQuery(this).attr('data-attribute_area');
      var speed = jQuery(this).attr('data-attribute_speed');
      var flex = jQuery(this).attr('data-attribute_flex');
  
      jQuery('.show-stats .product_name').text(product_name);
      jQuery('.attr-turns span').css('left','calc('+turns+'% - 4px)');
      jQuery('.attr-area span').css('left','calc('+area+'% - 4px)');
      jQuery('.attr-speed span').css('left','calc('+speed+'% - 4px)');
      jQuery('.attr-flex span').css('left','calc('+flex+'% - 4px)');
      jQuery('.show-stats').css('visibility','visible');
    });
  
    const finCheckboxes = document.getElementsByClassName('fin-checkbox');
    function selectFin(i) {
      return function() {
        if (totalTwinsSelected.value < 3 || (totalTwinsSelected.value == 3 && finCheckboxes[i].checked)){
          finCheckboxes[i].checked = !finCheckboxes[i].checked;
          if (finCheckboxes[i].checked) {
            showTwinFin(finCheckboxes[i].getAttribute('data-id'));
            highlightSelector(i, finSelectors);
            addXButton(i, 'x-button-container', 'x-button-box', finSelectors, 'review-chart-column', finCheckboxes, "twin", totalTwinsSelected);
            showChart('review-chart-column', i, finSelectors, "twin");
            totalTwinsSelected.value = totalTwinsSelected.value + 1;
          } else {
            hideTwinFin(finCheckboxes[i].getAttribute('data-id'));
            resetSelector(i, finSelectors);
            removeChart(i, 'review-chart-column');
            removeXButtonBox("x-button-box", i);
            totalTwinsSelected.value = totalTwinsSelected.value - 1;
          }
        }
      }
    }
  
    const finSelectors = document.getElementsByClassName('fin-selector');
    for (let i = 0; i < finSelectors.length; i++) {
      finSelectors[i].addEventListener("click", selectFin(i));
    }

    const trailerFinCheckboxes = document.getElementsByClassName('trailer-fin-checkbox');
    function selectTrailerFin(i) {
      return function() {
        if (totalTrailersSelected.value < 3 || (totalTrailersSelected.value == 3 && trailerFinCheckboxes[i].checked)){
          trailerFinCheckboxes[i].checked = !trailerFinCheckboxes[i].checked;
          if (trailerFinCheckboxes[i].checked) {
            showTrailerFin(trailerFinCheckboxes[i].getAttribute('data-id'));
            highlightSelector(i, trailerFinSelectors);
            addXButton(i, 'trailer-x-button-container', 'trailer-x-button-box', trailerFinSelectors, 'trailer-chart-column', trailerFinCheckboxes, "trailer", totalTrailersSelected);
            showChart('trailer-chart-column', i, trailerFinSelectors, "trailer");
            totalTrailersSelected.value = totalTrailersSelected.value + 1;
          } else {
            hideTrailerFin(trailerFinCheckboxes[i].getAttribute('data-id'));
            resetSelector(i, trailerFinSelectors);
            removeChart(i, 'trailer-chart-column');
            removeXButtonBox("trailer-x-button-box", i);
            totalTrailersSelected.value = totalTrailersSelected.value - 1;
          }
        }
      }
    }
    const trailerFinSelectors = document.getElementsByClassName('trailer-fin-selector');
    for (let i = 0; i < trailerFinSelectors.length; i++) {
      trailerFinSelectors[i].addEventListener("click", selectTrailerFin(i));
    }

    const sideBiteFinCheckboxes = document.getElementsByClassName('side-bite-fin-checkbox');
    function selectSideBiteFin(i) {
      return function() {
        if (totalSideBitesSelected.value < 3 || (totalSideBitesSelected.value == 3 && sideBiteFinCheckboxes[i].checked)){
          sideBiteFinCheckboxes[i].checked = !sideBiteFinCheckboxes[i].checked;
          if (sideBiteFinCheckboxes[i].checked) {
            showSideBiteFin(sideBiteFinCheckboxes[i].getAttribute('data-id'));
            highlightSelector(i, sideBiteFinSelectors);
            addXButton(i, 'side-bite-x-button-container', 'side-bite-x-button-box', sideBiteFinSelectors, 'side-bite-chart-column', sideBiteFinCheckboxes, "side-bite", totalSideBitesSelected);
            showChart('side-bite-chart-column', i, sideBiteFinSelectors, "side-bite");
            totalSideBitesSelected.value = totalSideBitesSelected.value + 1;
          } else {
            hideSideBiteFin(sideBiteFinCheckboxes[i].getAttribute('data-id'));
            resetSelector(i, sideBiteFinSelectors);
            removeChart(i, 'side-bite-chart-column');
            removeXButtonBox("side-bite-x-button-box", i);
            totalSideBitesSelected.value = totalSideBitesSelected.value - 1;
          }
        }
      }
    }
    const sideBiteFinSelectors = document.getElementsByClassName('side-bite-fin-selector');
    for (let i = 0; i < sideBiteFinSelectors.length; i++) {
      sideBiteFinSelectors[i].addEventListener("click", selectSideBiteFin(i));
    }
    
    const triFinCheckboxes = document.getElementsByClassName('tri-fin-checkbox');
    function selectTriFin(i){
      return function() {
        if (totalTrisSelected.value < 3 || (totalTrisSelected.value == 3 && triFinCheckboxes[i].checked)){
          triFinCheckboxes[i].checked = !triFinCheckboxes[i].checked;
          if (triFinCheckboxes[i].checked) {
            showTriFin(triFinCheckboxes[i].getAttribute('data-id'));
            highlightSelector(i, triFinSelectors);
            addXButton(i, 'tri-x-button-container', 'tri-x-button-box', triFinSelectors, 'tri-chart-wrapper', triFinCheckboxes, "tri", totalTrisSelected);
            showChart('tri-chart-wrapper', i, triFinSelectors, "tri");
            totalTrisSelected.value = totalTrisSelected.value + 1;
          } else {
            hideTriFin(finCheckboxes[i].getAttribute('data-id'));
            resetSelector(i, triFinSelectors);
            removeChart(i, 'tri-chart-wrapper');
            removeXButtonBox("tri-x-button-box", i);
            totalTrisSelected.value = totalTrisSelected.value - 1;
          }
        }
      }
    }
    const triFinSelectors = document.getElementsByClassName('tri-fin-selector');
    for (let i = 0; i < triFinSelectors.length; i++) {
      triFinSelectors[i].addEventListener("click", selectTriFin(i));
    }
    const quadFinCheckboxes = document.getElementsByClassName('quad-fin-checkbox');
    function selectQuadFin(i){
      return function() {
        if (totalQuadsSelected.value < 3 || (totalQuadsSelected.value == 3 && quadFinCheckboxes[i].checked)){
          quadFinCheckboxes[i].checked = !quadFinCheckboxes[i].checked;
          if (quadFinCheckboxes[i].checked) {
            showQuadFin(quadFinCheckboxes[i].getAttribute('data-id'));
            highlightSelector(i, quadFinSelectors);
            addXButton(i, 'quad-x-button-container', 'quad-x-button-box', quadFinSelectors, 'quad-chart-wrapper', quadFinCheckboxes, "quad", totalQuadsSelected);
            showChart('quad-chart-wrapper', i, quadFinSelectors, "quad");
            totalQuadsSelected.value = totalQuadsSelected.value + 1;
          } else {
            hideQuadFin(quadFinCheckboxes[i].getAttribute('data-id'));
            resetSelector(i, quadFinSelectors);
            removeChart(i, 'quad-chart-wrapper');
            removeXButtonBox("quad-x-button-box", i);
            totalQuadsSelected.value = totalQuadsSelected.value - 1;
          }
        }
      }
    }
    const quadFinSelectors = document.getElementsByClassName('quad-fin-selector');
    for (let i = 0; i < quadFinSelectors.length; i++) {
      quadFinSelectors[i].addEventListener("click", selectQuadFin(i));
    }
    const twinzerFinCheckboxes = document.getElementsByClassName('twinzer-fin-checkbox');
    function selectTwinzerFin(i){
      return function() {
        if (totalTwinzersSelected.value < 3 || (totalTwinzersSelected.value == 3 && twinzerFinCheckboxes[i].checked)){
          twinzerFinCheckboxes[i].checked = !twinzerFinCheckboxes[i].checked;
          if (twinzerFinCheckboxes[i].checked) {
            showTwinzerFin(twinzerFinCheckboxes[i].getAttribute('data-id'));
            highlightSelector(i, twinzerFinSelectors);
            addXButton(i, 'twinzer-x-button-container', 'twinzer-x-button-box', twinzerFinSelectors, 'twinzer-chart-wrapper', twinzerFinCheckboxes, "twinzer", totalTwinzersSelected);
            showChart('twinzer-chart-wrapper', i, twinzerFinSelectors, "twinzer");
            totalTwinzersSelected.value = totalTwinzersSelected.value + 1;
          } else {
            hideTwinzerFin(twinzerFinCheckboxes[i].getAttribute('data-id'));
            resetSelector(i, twinzerFinSelectors);
            removeChart(i, 'twinzer-chart-wrapper');
            removeXButtonBox("twinzer-x-button-box", i);
            totalTwinzersSelected.value = totalTwinzersSelected.value - 1;
          }
        }
      }
    }
    const twinzerFinSelectors = document.getElementsByClassName('twinzer-fin-selector');
    for (let i = 0; i < twinzerFinSelectors.length; i++) {
      twinzerFinSelectors[i].addEventListener("click", selectTwinzerFin(i));
    }
  // };
  })
});



