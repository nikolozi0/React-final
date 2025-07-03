# Weather App

**Weather App** — რეაქტზე შექმნილი ამინდის პროგნოზის SPA აპლიკაცია, რომელიც მხარს უჭერს:  
- რეალურ დროში ამინდის ნახვას  
- ქალაქების ძებნას ქართულ და ინგლისურ ენებზე  
- ფავორიტების დასამახსოვრებლად  
- მრავალენოვან მხარდაჭერას (ქართული და ინგლისური)  
- თემების შეცვლას (დარდი / ლაით)  
- ისტორიის შენახვას და მართვას  

---

## ტექნოლოგიები

- React (Function Components + Hooks)  
- Tailwind CSS  
- OpenWeatherMap API  
- React Router  
- LocalStorage (ისტორიის და ფავორიტების შენახვა)  
- Context API (Theme, Language, Weather)  
- Custom Hooks  

---

## ინსტალაცია და გაშვება

1. კლონირეთ რეპო:  
```bash
git clone https://github.com/შენი-სახელი/React-final.git
გადახვიდით საქაღალდეში:

bash
Copy
Edit
cd React-final
დააყენეთ საჭირო პაკეტები:

bash
Copy
Edit
npm install
გაიშვით ლოკალური დეველოპერული სერვერი:

bash
Copy
Edit
npm start
გახსენით ბრაუზერი და გადადით:

arduino
Copy
Edit
http://localhost:3000
პროექტის სტრუქტურა
src/components/ — კომპონენტები (Header, SearchBar, WeatherCard, MobileNav)

src/pages/ — გვერდები (HomePage, ForecastPage, FavoritesPage)

src/contexts/ — კონტექსტები (ThemeContext, LanguageContext, WeatherContext)

src/hooks/ — კუსტმ ჰუკები (useWeatherAPI, useStorage, useFavorites, useNavigation)

src/utils/ — ამქვეყნიური რესურსები (cityMap, translations)

ფუნქციები
ქალაქების ძებნა ქართულ და ინგლისურ ენებზე

ამინდის ამოღება OpenWeatherMap-ის API-დან

საყვარელ ქალაქებში ამინდის შენახვა

თემა — Light და Dark რეჟიმი

ენების შერჩევა — ქართულ და ინგლისურ

ბოლო საძიებო სიტყვების ავტომატური შენახვა

რეაგირება ფანჯრის ზომის ცვლილებაზე (რესპონსივობა)

სქრინშოთები

![Screenshot 2025-07-04 014635](https://github.com/user-attachments/assets/bf16b5f8-5666-4dc4-828d-2ca3ef1eb5fe)
![Screenshot 2025-07-04 015115](https://github.com/user-attachments/assets/168ef344-9196-4682-b303-4100b8d2e4b3)
![Screenshot 2025-07-04 015037](https://github.com/user-attachments/assets/71246156-e21b-4003-a47c-4bad3d760ad6)
![Screenshot 2025-07-04 015002](https://github.com/user-attachments/assets/631f3a45-0c80-4872-9280-85a97fdc8698)



კონტაქტი
ავტორი: ნიკოლოზ მჭედლიშვილი
მეილი: your.email@example.com
GitHub: github.com/nikolozi0
