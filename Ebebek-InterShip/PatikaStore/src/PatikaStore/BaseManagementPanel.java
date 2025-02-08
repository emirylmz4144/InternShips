package PatikaStore;

import java.util.*;
public class BaseManagementPanel
{
    PhoneManagement phoneManagement = new PhoneManagement();
    NotebookManagement notebookManagement = new NotebookManagement();
    Scanner input = new Scanner(System.in);
    private boolean isRun = true;

    public void run() // Projeyi ana hatlarıyla çalıştıran metottur
    {
        int choose; //Kullanıcıdan yapmasını istediği seçimi alır
        while (isRun)
        {
            System.out.println("PatikaStore Yönetim Paneli !");
            System.out.println("""
                              1-Notebook İşlemleri             
                              2-Cep Telefonu İşlemleri
                              3-Marka Listele
                              0-Çıkış Yap"""); // Hangi işlemi yapacağına dair işlemlerin detayını verir


            choose = input.nextInt();
            System.out.println("Tercihiniz : " + choose);

            while (choose < 0 || choose > 3) //Verilen işlem seçeneklerinden seçildiğinin kontrolü
            {
                System.out.println("Lütfen geçerli bir seçim giriniz.");
                choose = input.nextInt();
            }
            switch (choose)
            {
                case 1 -> notebookManagement.notebook();
                case 2 -> phoneManagement.Phone();          //=>Hangi sınıf seçilirse o sınıf özellikleri çalıştırılır
                case 3 -> Brand.printDefaultBrand();
                case 0 -> isRun = false; //Çıkış işleminde döngü kırılır
            }

            /*
             *default değer yazılmamıştır çünki zaten kontrol verilen seçenekler arasında
             * seçim yapılıp yapılmadığı kontrol ediliyor
             */
        }
    }

}

