const { chromium } = require('playwright');

(async () => {
  console.log('Launching browser in headful mode...');
  
  try {
    // Launch browser in headful mode (visible) using system Chrome
    const browser = await chromium.launch({
      headless: false,
      args: ['--start-maximized'],
      executablePath: '/usr/bin/google-chrome'
    });
    
    console.log('Browser launched successfully');
    
    // Create a new page
    const page = await browser.newPage();
    
    console.log('Navigating to Google.com...');
    await page.goto('https://www.google.com');
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    
    console.log('Taking screenshot of Google homepage...');
    await page.screenshot({ path: '/home/captain/projects/test_caude_code/google_homepage.png' });
    
    console.log('Searching for "claude code"...');
    // Find the search input and type the search term
    const searchInput = await page.locator('input[name="q"]');
    await searchInput.fill('claude code');
    await searchInput.press('Enter');
    
    // Wait for search results to load
    await page.waitForLoadState('networkidle');
    
    console.log('Taking screenshot of search results...');
    await page.screenshot({ path: '/home/captain/projects/test_caude_code/search_results.png' });
    
    // Get search results
    console.log('Extracting search results...');
    const searchResults = await page.locator('div.g').allTextContents();
    
    console.log('Search Results:');
    searchResults.forEach((result, index) => {
      console.log(`\n--- Result ${index + 1} ---`);
      console.log(result.substring(0, 200) + '...');
    });
    
    console.log('\nScreenshots saved:');
    console.log('- /home/captain/projects/test_caude_code/google_homepage.png');
    console.log('- /home/captain/projects/test_caude_code/search_results.png');
    
    // Keep browser open for a few seconds to show the results
    console.log('Keeping browser open for 10 seconds...');
    await page.waitForTimeout(10000);
    
    await browser.close();
    console.log('Browser closed');
    
  } catch (error) {
    console.error('Error:', error.message);
    console.error('Stack:', error.stack);
  }
})();