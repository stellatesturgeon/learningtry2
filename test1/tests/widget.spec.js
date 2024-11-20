const { test, chromium } = require('@playwright/test');

test('Open Chrome, load widget, and close browser', async () => {
  // Запускаем Chrome
  const browser = await chromium.launch({
    channel: 'chrome', // Указываем, что хотим использовать Google Chrome
    headless: false    // Устанавливаем false, чтобы браузер был видимым
  });

  // Открываем новую вкладку
  const context = await browser.newContext();
  const page = await context.newPage();

  // Загружаем виджет
  await page.goto('https://stage.freetc.net/v1/widgets/common?token=eyJhbGciOiJIUzI1NiIsImlzcyI6InN0YWdlLmZyZWV0Yy5uZXQiLCJ0eXAiOiJKV1QifQ.eyJwIjoiNjUzNjY2NDI3Nzg1ZGRkNjVjYjliYTkzIn0.PxDseS8QL1L9qctx0YcRVaHGOwiLSYhJqHLVFvol9nM&event=667398bfa3a1e2cfbfca1081&s=1&r=1&org=653666427785ddd65cb9ba93&city=524901&category=592841f8515e35002dead914&tags=592841f8515e35002dead918%2CHardcore&lang=ru');

  // Ждём 5 секунд
  await page.waitForTimeout(5000);

  // Закрываем браузер
  await browser.close();
});
