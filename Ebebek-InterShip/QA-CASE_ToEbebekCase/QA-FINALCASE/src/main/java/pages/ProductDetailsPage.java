package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class ProductDetailsPage extends BasePage {

    By areWeOnProductDetails=By.id("addToCartBtn");



    public ProductDetailsPage(WebDriver webDriver) // Ata sınıftaki driverı kullanırız
    {
        super(webDriver);
    }

    public boolean isOnProductDetailsPage() // ilgili sayfada olup olmadığımız kontrol edilir
    {
        return isDisplayed(areWeOnProductDetails);
    }

    public void addaToCard() // ilgili ürünü sepete ekleyen metot
    {
        click(areWeOnProductDetails);
    }

}
