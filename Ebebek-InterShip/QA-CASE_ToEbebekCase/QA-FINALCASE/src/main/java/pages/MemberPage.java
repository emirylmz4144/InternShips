package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class MemberPage extends BasePage
{
    By areWeOnMemberPage= By.id("btnSubmitLogin");
    By completeShopping=By.id("btnGoToShippingAddress");
    public MemberPage(WebDriver webDriver)// Ata sınıftaki driverı kullanırız
    {
        super(webDriver);
    }
    public void completeTheShopping()// alışverişi tamamlamak için kullanılan metot
    {
        click(completeShopping);
    }
    public boolean isOnProductMemberPage()// ilgili sayfada olup olmadığımız kontrol edilir
    {
        return isDisplayed(areWeOnMemberPage);
    }
}
