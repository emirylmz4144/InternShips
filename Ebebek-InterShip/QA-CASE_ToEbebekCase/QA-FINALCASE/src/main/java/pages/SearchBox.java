package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;

public class SearchBox extends BasePage {
    By searchBoxLocator=By.id("txtSearchBox");

    public SearchBox(WebDriver webDriver) // Ata sınıftaki driverı kullanırız
    {
        super(webDriver);
    }

    public void search(String text) // Arama çubuğuna yazılacak textin çubuğa aktarılmasını sağlayacak metot
    {
        type(searchBoxLocator,text);// arama çubuğunu bulur ve istenen yazıyı yazar
        webDriver.findElement(By.id("txtSearchBox")).sendKeys(Keys.ENTER); // aramayı başlatır
    }
}
