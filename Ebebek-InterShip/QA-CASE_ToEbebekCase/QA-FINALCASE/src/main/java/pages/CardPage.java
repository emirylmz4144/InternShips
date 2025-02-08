package pages;

import org.openqa.selenium.WebDriver;

public class CardPage extends BasePage {
    HomePage homePage;
    public CardPage(WebDriver webDriver)// Ata sınıftaki driver'ı alacak şekilde oluşturulan constuructor
    {
        super(webDriver);
        homePage=new HomePage(webDriver);
    }

    public boolean isProductAdded()// Ürünün sepete eklenip eklenmediğini kontrol eden metot
    {
        return homePage.getCartCount()<2;// ebebek sitesi aynı üründen en fazla iki adet alınmasına izin verir
    }
}
