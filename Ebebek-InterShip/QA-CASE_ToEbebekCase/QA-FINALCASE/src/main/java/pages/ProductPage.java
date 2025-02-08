package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.List;

public class ProductPage extends BasePage
{
    By areWeOnThePage=By.id("txtBrandFilter");
    By allProducts=By.className("'product-item");

    public ProductPage(WebDriver webDriver) // Ata sınıftaki driverı kullanırız
    {
        super(webDriver);
    }

    public boolean isOnTheProductPage()// İlgili sayfada olup olmadığımız kontrol edilir
    {
        return isDisplayed(areWeOnThePage);

    }

    /*
    *Açılan sayfada birçok web elementi olacak ve bizden istenen testi yani açılan ürünle tıklanan ürünün
    * aynı olup olmadığını kontrol etmek için seçilen ürünü tutacak metodumuz olacak
     */
    public void selectProduct(int i)
    {
        getAllProduct().get(i).click();
    }

    /*
    *İleride açılan ürün ile tıklanan ürünün aynı olup olmadığını kontrol etmek için
    * tüm web elementleri listede kaydedilmelidirki hangi elementin doğru olup olmadığı kontrol edilsin
    * aşağıdaki metot tüm web elementlerini tutup oluşturduğumuz listeye aktatarır
     */
    public List<WebElement> getAllProduct()
    {
        return findAll(allProducts);

    }
}
