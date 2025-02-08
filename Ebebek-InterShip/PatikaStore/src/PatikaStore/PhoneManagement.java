package PatikaStore;

import java.util.Scanner;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.LinkedHashMap;


public class PhoneManagement
{
    /*
    *NotebookManagement ile aynı işlevleri görür yani bu sınıfı anlamak için
    * NotebookManagement sınıfının yorum kodlarını okumanız yeterlidir
     */
    Scanner input = new Scanner(System.in);

    LinkedHashMap<Integer, Phone> phoneManagmentLinkedList = new LinkedHashMap<>();

    AtomicInteger phoneId = new AtomicInteger();

    public void Phone()
    {
        boolean stateOfPhone = true;
        while (stateOfPhone)
        {
            System.out.println("Cep Telefonu Yönetim Paneli !");
            System.out.println("""
                              1-Ürün Ekleme işlemi
                              2-Ürün Silme işlemi
                              3-Ürünleri Listeleme işlemi
                              0-Çıkış Yap""");

            int  choose = input.nextInt();
            System.out.println("Tercihiniz : " + choose);

            while (choose < 0 || choose > 3)
            {
                System.out.println("Lütfen geçerli bir seçim  giriniz.");
                choose = input.nextInt();
            }

            switch (choose)
            {
                case 1:
                    addPhone();
                    System.out.println("Ürün ekleme işlemi başırılı şekilde gerçekleşmiştir...");
                    break;
                case 2:
                    if(deletePhone())
                    {
                        System.out.println("Silme işlemi başarılıyla gerçekleşmiştir...");
                        break;
                    }else
                    {
                        System.out.println("Eksik Yada Hatalı ID girdiğiniz için silme işlemi gerçekleşmedi");
                    }
                    break;
                case 3:
                    showPhoneList();
                    break;
                case 0:
                    stateOfPhone = false;
            }
        }

    }

    public void showPhoneList()
    {
        System.out.println("Cep Telefonu Listesi: ");
        System.out.println(
                "-----------------------------------------------------------------------------------------------------------------------------------------------------------------");
        System.out.println(
                "| ID | Ürün Adı                   | Fiyat           | Marka      | Depolama Alanı    | Ekran Boyutu     | Kamera    | Pil Gücü     | Renk      |   RAM       |");
        for (Integer keyset: phoneManagmentLinkedList.keySet())
        {
            System.out.println(
                    "-----------------------------------------------------------------------------------------------------------------------------------------------------------------");
            phoneManagmentLinkedList.get(keyset).printInformationsOfPhone();
        }
    }
    private void addPhone()
    {
        int id = phoneId.incrementAndGet();
        System.out.println("ürün Adı: ");
        input.next();
        String productName = input.nextLine();
        System.out.println("Fiyatı: ");
        double price = input.nextDouble();
        input.nextLine();
        System.out.println("Marka Adı: ");
        String brandName = input.nextLine();
        System.out.println("Depolama Alanı: ");
        int storage = input.nextInt();
        System.out.println("Ekran Boyutu: ");
        double screenSize = input.nextDouble();
        System.out.println("Kamera Çözünürlüğü: ");
        int camera = input.nextInt();
        System.out.println("Pil: ");
        int power = input.nextInt();
        System.out.println("Ram: ");
        int ram = input.nextInt();
        System.out.println("Renk: ");
        String color = input.next();
        System.out.println("Stok Miktarı: ");
        int Quantity = input.nextInt();
        phoneManagmentLinkedList.put(id,new Phone(id,productName,price,brandName,storage,screenSize,camera,power,ram,color,Quantity));
    }
    private boolean deletePhone()
    {
        System.out.println("Silmek İstediğiniz ürünün ID'sini giriniz: ");
        int historySize = phoneManagmentLinkedList.size();
        int id = input.nextInt();
        phoneManagmentLinkedList.remove(id);
        int newSize = phoneManagmentLinkedList.size();
        return newSize != historySize;
    }
}