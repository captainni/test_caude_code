const { chromium } = require('playwright');

(async () => {
  console.log('=== Playwright Baidu Search Demo ===');
  console.log('This script demonstrates how to:');
  console.log('1. Launch a browser in headful mode (visible)');
  console.log('2. Navigate to Baidu.com');
  console.log('3. Perform a search for "claude code"');
  console.log('4. Take screenshots of the process');
  console.log('5. Show the search results');
  console.log('');
  
  try {
    console.log('Step 1: Launching browser in headful mode...');
    
    // Launch browser in headful mode (visible)
    const browser = await chromium.launch({
      headless: false,  // Set to true for headless mode
      args: ['--start-maximized'],
      slowMo: 1000,  // Slow down actions for better visibility
      executablePath: '/usr/bin/google-chrome'  // Use system Chrome
    });
    
    console.log('✓ Browser launched successfully');
    
    // Create a new page
    const page = await browser.newPage();
    
    console.log('Step 2: Navigating to Baidu.com...');
    await page.goto('https://www.baidu.com');
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    
    console.log('✓ Baidu homepage loaded');
    console.log('Step 3: Taking screenshot of Baidu homepage...');
    await page.screenshot({ path: '/home/captain/projects/test_caude_code/baidu_homepage.png' });
    
    console.log('✓ Screenshot saved: baidu_homepage.png');
    
    console.log('Step 4: Searching for "claude code"...');
    
    // Find the search input and type the search term
    // Baidu's search input has id "kw"
    const searchInput = await page.locator('#kw');
    await searchInput.fill('claude code');
    
    // Take screenshot before submitting
    await page.screenshot({ path: '/home/captain/projects/test_caude_code/baidu_search_input_filled.png' });
    
    // Find and click the search button (Baidu's search button has id "su")
    const searchButton = await page.locator('#su');
    await searchButton.click();
    
    // Wait for search results to load
    await page.waitForLoadState('networkidle');
    
    console.log('✓ Search completed');
    console.log('Step 5: Taking screenshot of search results...');
    await page.screenshot({ path: '/home/captain/projects/test_caude_code/baidu_search_results.png' });
    
    console.log('✓ Screenshot saved: baidu_search_results.png');
    
    // Get search results
    console.log('Step 6: Extracting search results...');
    // Baidu search results are typically in containers with class "result"
    const searchResults = await page.locator('.result').allTextContents();
    
    console.log('\n=== BAIDU SEARCH RESULTS ===');
    if (searchResults.length > 0) {
      searchResults.forEach((result, index) => {
        console.log(`\n--- Result ${index + 1} ---`);
        const truncated = result.length > 200 ? result.substring(0, 200) + '...' : result;
        console.log(truncated);
      });
    } else {
      console.log('No search results found with selector ".result"');
      console.log('Trying alternative selectors...');
      
      // Try alternative selectors for Baidu results
      const alternativeResults = await page.locator('div[id^="content_left"] > div').allTextContents();
      if (alternativeResults.length > 0) {
        alternativeResults.forEach((result, index) => {
          console.log(`\n--- Alternative Result ${index + 1} ---`);
          const truncated = result.length > 200 ? result.substring(0, 200) + '...' : result;
          console.log(truncated);
        });
      }
    }
    
    console.log('\n=== SCREENSHOTS TAKEN ===');
    console.log('1. /home/captain/projects/test_caude_code/baidu_homepage.png');
    console.log('2. /home/captain/projects/test_caude_code/baidu_search_input_filled.png');
    console.log('3. /home/captain/projects/test_caude_code/baidu_search_results.png');
    
    console.log('\nStep 7: Keeping browser open for 15 seconds for viewing...');
    await page.waitForTimeout(15000);
    
    console.log('Step 8: Closing browser...');
    await browser.close();
    console.log('✓ Browser closed');
    
    console.log('\n=== BAIDU SEARCH DEMO COMPLETED SUCCESSFULLY ===');
    
  } catch (error) {
    console.error('❌ Error occurred:');
    console.error('Error:', error.message);
    console.error('Stack:', error.stack);
    
    console.log('\n=== TROUBLESHOOTING ===');
    console.log('1. Check internet connectivity');
    console.log('2. Ensure Playwright browsers are installed:');
    console.log('   npx playwright install chromium');
    console.log('3. Try running in headless mode by setting headless: true');
    console.log('4. Check if Baidu is accessible from your network');
  }
})();