import { Tovar } from '../tovar/tovar' 
import s from './Product.module.css' 
import React, { useState } from 'react'; 
 
const products = [ 
    { 
        id: 1, 
        title: 'Обои 1', 
        price: 5500, 
        description: 'Ручные гармоники — музыкальные инструменты, составляющие основу семейства гармоник. Отличительными конструктивными особенностями подобных инструментов является наличие двух полукорпусов с клавиатурами, между которыми находится мех. Небольшие по размеру и массе гармони во время игры удерживают в руках на весу, гармоники побольше устанавливают на колени в положении сидя или подвешивают за плечевые ремни в положении стоя. Играют двумя руками, двигая левый или оба полукорпуса для разжатия и сжатия меха, что при одновременном нажатии клавиш приводит к поступлению воздуха на язычки гармоники и к их звучанию.', 
        image: 'https://cdn.leroymerlin.ru/lmru/image/upload/f_auto/q_auto/dpr_2.0/c_pad/w_1000/h_1000/v1519808870/lmcode/G421erWHn0-cSGTB9ZWqBg/81951660.jpg', 
        quantity: 0, 
        category: 'Обои 1' 
    }, 
 
    { 
        id: 2, 
        title: 'Обои 2', 
        price: 8200, 
        description: 'Гита́ра — струнный щипковый музыкальный инструмент. Применяется в качестве аккомпанирующего или сольного инструмента во многих стилях и направлениях музыки, среди которых романс, блюз, кантри, фламенко, рок, джаз. Изобретённая в XX веке электрическая гитара произвела значительные изменения в музыке и тем самым оказала сильное влияние на массовую культуру. Также есть классическая гитара, гитара фламенко, испанская гитара и некоторые другие виды.', 
        image: 'https://cdn.leroymerlin.ru/lmru/image/upload/f_auto/q_auto/dpr_2.0/c_pad/w_1000/h_1000/v1730396868/lmcode/INwXQg7PFkau8CMBVedbCA/89374706_01.png', 
        quantity: 7, 
        category: 'Обои 2' 
    }, 
    { 
        id: 3, 
        title: 'Обои 3', 
        price: 10300, 
        description: 'Саксофо́н (фр. saxophone) — духовой музыкальный инструмент с одинарной тростью. Сконструирован бельгийским мастером Адольфом Саксом в первой половине 1840-х годов. Обладает своеобразным выразительным звучанием и большой технической подвижностью[2]. С середины XIX века используется в духовом оркестре, реже — в симфоническом. Один из основных инструментов в джазе[2] и родственных ему жанрах, а также в эстрадной музыке.', 
        image: 'https://cdn.leroymerlin.ru/lmru/image/upload/f_auto/q_auto/dpr_2.0/c_pad/w_1000/h_1000/v1730393092/lmcode/IyM_7QFMhU6lMVNau2tBAQ/89384286_01.jpg', 
        quantity: 1, 
        category: 'Обои 3' 
    }, 
    { 
        id: 4, 
        title: 'Обои 4', 
        price: 20400, 
        description: 'А́рфа — щипковый музыкальный инструмент, состоит из двух расположенных под углом рам, между которыми натянуто множество струн. Один из древнейших инструментов, символ Ирландии. В XVIII столетии была изобретена педальная арфа, ставшая стандартом в классической музыке.', 
        image: 'https://cdn.leroymerlin.ru/lmru/image/upload/f_auto/q_auto/dpr_2.0/c_pad/w_1000/h_1000/v1652968057/lmcode/hgwCbzTuu06UHG78M6zCBQ/84659727.jpg', 
        quantity: 1, 
        category: 'Обои 4' 
    }, 
 
    { 
        id: 5, 
        title: 'Обои 5', 
        price: 3500, 
        description: 'Укуле́ле — четырёхструнная разновидность гитары, используемая для аккордового сопровождения песен и игры соло[1].', 
        image: 'https://cdn.leroymerlin.ru/lmru/image/upload/f_auto/q_auto/dpr_2.0/c_pad/w_1000/h_1000/v1675083082/lmcode/UCSA2AtYyU2V0yD55wzp0A/86475319.png', 
        quantity: 2, 
        category: 'Обои 5' 
    }, 
     
]; 
 
 
export function Catalog() { 
    const [searchTerm, setSearchTerm] = useState(''); 
    const [sortCriteria, setSortCriteria] = useState(''); 
    const [selectedCategory, setSelectedCategory] = useState('');  
 
    const handleSearchChange = (event) => { 
        setSearchTerm(event.target.value); 
    }; 
 
    const handleCategoryChange = (event) => { 
        setSelectedCategory(event.target.value); 
    }; 
 
    const sortProducts = (products) => { 
        if (sortCriteria === 'priceAsc') { 
            return products.sort((a, b) => a.price - b.price); 
        } else if (sortCriteria === 'priceDesc') { 
            return products.sort((a, b) =>
                b.price - a.price); 
        } else if (sortCriteria === 'quantityAsc') { 
            return products.sort((a, b) => a.quantity - b.quantity); 
        } else if (sortCriteria === 'quantityDesc') { 
            return products.sort((a, b) => b.quantity - a.quantity); 
        } 
        return products; 
    }; 
 
    const filterProducts = (products) => { 
        if (selectedCategory) { 
            return products.filter(product => product.category === selectedCategory); 
        } 
        return products;  
    }; 
 
    const filteredProducts = filterProducts(products).filter(product => 
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) 
    ); 
 
    const sortedProducts = sortProducts(filteredProducts); 
 
    return ( 
        <div className={s.catalogszag}> 
        <h1 className={s.Zagolovktov}>Каталог товаров</h1> 
        <div className={s.PoiskFiltr}> 
            <input className={s.Pole} 
                type="text" 
                value={searchTerm} 
                onChange={handleSearchChange} 
                placeholder="Поиск товаров..." 
            /> 
            <select value={selectedCategory} onChange={handleCategoryChange}> 
                <option value="">Все категории</option> 
                <option value="Обои">Обои</option> 
                <option value="Однотонные">Однотонные</option> 
                <option value="Кресла">Кресла</option> 
                <option value="Ремонт мебели">Ремонт мебели</option> 
                <option value="Диваны">Диваны</option> 
 
            </select> 
            <select value={sortCriteria} onChange={(e) => setSortCriteria(e.target.value)}> 
                <option value="">Без сортировки</option> 
                <option value="priceAsc">Цена: по возрастанию</option> 
                <option value="priceDesc">Цена: по убыванию</option> 
                <option value="quantityAsc">Количество: по возрастанию</option> 
                <option value="quantityDesc">Количество: по убыванию</option> 
            </select> 
        </div> 
            <div className={s.catalogs}> 
                <div className={s.catalog}> 
                    {sortedProducts.map((product) => ( 
                        <Tovar  
                            key={product.id} 
                            id={product.id} 
                            title={product.title}  
                            price={product.price}  
                            image={product.image}  
                            quantity={product.quantity}  
                            category={product.category} 
                        /> 
                    ))} 
                </div> 
            </div> 
        </div> 
    ); 
}