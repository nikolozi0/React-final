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
cd React-final
დააყენეთ საჭირო პაკეტები:
npm install
გაიშვით ლოკალური დეველოპერული სერვერი:
npm start
გახსენით ბრაუზერი და გადადით:
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


კონტაქტი
ავტორი: ნიკოლოზ მჭედლიშვილი
მეილი: nikoloz.mtchedlishvili.1@but.edu.ge
GitHub: github.com/nikolozi0
