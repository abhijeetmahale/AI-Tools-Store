document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const priceFilter = document.getElementById('priceFilter');
    const toolList = document.getElementById('toolList');
    
    let toolsData = []; // Placeholder for tool data (replace with your JSON data)
  
    // Fetch and load the tools data from your JSON file or API
    // Replace the placeholder code below with your own data retrieval logic
  
    // Example placeholder code (replace it with your own data retrieval logic)
    fetch('tools.json')
      .then(response => response.json())
      .then(data => {
        toolsData = data;
        renderToolList();
      })
      .catch(error => {
        console.error('Error retrieving tools data:', error);
      });
  
    function renderToolList() {
      toolList.innerHTML = '';
      
      const searchValue = searchInput.value.toLowerCase();
      const categoryValue = categoryFilter.value;
      const priceValue = priceFilter.value;
  
      toolsData.forEach(tool => {
        const { name, link, category, price, description, image} = tool;
  
        // Apply search and filter conditions
        if ((searchValue === '' || name.toLowerCase().includes(searchValue) || category.toLowerCase().includes(searchValue)) &&
        (categoryValue === '' || category === categoryValue) &&
        (priceValue === '' || price === priceValue)) {
          
          const toolCard = document.createElement('div');
          toolCard.classList.add('tool-card');
  
          const toolName = document.createElement('h1');
          const toolLink = document.createElement('a');
          toolLink.href = link; toolLink.target = '_blank';
          toolLink.textContent = name;
          
  
          const toolCategory = document.createElement('p');
          toolCategory.textContent = `Category: ${category}`;
  
          const toolPrice = document.createElement('p');
          toolPrice.textContent = `Price: ${price}`;
  
          const toolDescription = document.createElement('p');
          toolDescription.textContent = description;

          const toolImage = document.createElement('img');
          toolImage.src = image;
          toolImage.alt = name;
  
          toolCard.appendChild(toolName);
          toolName.appendChild(toolLink);
          toolCard.appendChild(toolCategory);
          toolCard.appendChild(toolPrice);
          toolCard.appendChild(toolDescription);
          toolCard.appendChild(toolImage);

          toolList.appendChild(toolCard);
        }
      });
    }
  
    // Event listeners for search and filters
    searchInput.addEventListener('input', renderToolList);
    categoryFilter.addEventListener('change', renderToolList);
    priceFilter.addEventListener('change', renderToolList);
  });
  
