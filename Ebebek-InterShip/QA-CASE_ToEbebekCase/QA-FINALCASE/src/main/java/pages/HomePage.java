package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;



public class HomePage extends BasePage
{
    SearchBox searchBox;
    By findCountQuality=By.className("number ng-star-inserted");
    By getToCard=By.className("icon-shopping-cart");


    public HomePage(WebDriver webDriver) // Ata sınıftaki driver'ı alacak şekilde oluşturulan constuructor
    {
        super(webDriver);
        searchBox=new SearchBox(webDriver);
    }

    public SearchBox searchbox()// İleride kullanmak için ilgili sayfadaki arama çubuğu sayfasını bulup bize döndüren metot
    {
        return this.searchBox;
    }

    public boolean isProductCountUp() // Sepetteki ürün miktarının arttığını kontrol eden metot
    {
       return getCartCount() > 0;
    }

    public void goToCard()// Ana sayfa üzerinden sepete gitmemizi sağlayan (2.garanti) metot
    {
        click(getToCard);
    }

    public int getCartCount()// Sepetteki ürün miktarını bize döndüren metot
    {
        String countQuality=find(findCountQuality).getText();// Miktarı text olarak alırız
        return Integer.parseInt(countQuality);// text ile alınan miktarı integer değere çevirip döndürürüz
    }
}
