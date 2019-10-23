//класс - это шаблон
class Header {      //класс всегда с большой буквы начинается
    constructor(img, h1, h2) {      //вводные для этого объекта
        this.src = img;  //this в данном случае - ссылка на будущий объкт
        this._h1 = h1;      //"эмуляция защищённого свойства". Переменные с нижним подчеркиванием изменять не нужно
        this.h2 = h2;
    }

    render(param) {       //метод для класса
        //param - куда будем отрисовывать заголовок
        console.log(this.h1)
        let out = '';
        out += `<img src="${this.src}" alt="" class="logo">`;
        out += `<h1>${this.h1}</h1>`;
        out += `<h2>${this.h2}</h2>`;
        document.getElementById(param).innerHTML = out
    }

    static hello(a) {       //статисческие методы вызываются не из объекта класса, а из самого класса.
        console.log('work static method ' + a)
    }
}

const img = 'https://avatars.mds.yandex.net/get-pdb/224945/f358b199-97c2-45f4-a565-433a62935ec6/s375';
const header = new Header(img, 'Hello', 'world');
console.log(header)

header.render('header');        //вызываем метод объекта. Метод ищет по документы соответствующий ИДшник и вставляет туда

//наследование
class Header2 extends Header {
    constructor(img, h1, h2, hero) {      //нужно прописывать параметры конструктора из родительского класса
        super(img, h1, h2)       //получаем данные из родительского конструктора
        this._hero = hero;
    }

    get hero() {     //геттер, метод get(). Получаем данные
        return this._hero;
    }

    set hero(c) {
        this._hero = c;     //сеттер, метод set(). Соответственно, с помощью данного метода переприсваиваем значение.
    }
}

const header2 = new Header2('imgsrc', 'new hello', 'new site', 'gogogogo');
header2.hero = 'Superman!';
console.log(header2)
console.log(header2.hero)       //когда вызываем метод get() скобки не ставятся


Header.hello('hi');     //статисческие методы вызываются не из объекта класса, а из самого класса.

// header2.render('header');

//класс - объект. Шаблон, на основании которого я хочу строить определённую часть приложения. Кроме того, с помощью классов мы константы и переменные логически объединяем в одном объекте
//метод - рисует на странице.  В реакте метод render(что рисовать, куда рисовать)
//конструктор - это специальная функция, которая запустится из класса, когда будем создавать объект
//геттеры и сеттеры
//extends - расширяет родительский класс. Происходит наследование. При наследовании остаются все возможности класса родителя
//super() - объявляем в потомке параметры родителя без повторного переписывания
//static() - статические методоы и их можно вызвать, не создавая объект класса. Заранее спланированные сервисные методы
//свойства, которые не нужно изменять вручную, обычно обозначаются нижним подчеркиванием - _h1, _h2 и т.д.
//если нужно изменять\получать какие-то данные, лучше использовать методы get() и set(), а не напрямую перезаписывать свойства объекта.