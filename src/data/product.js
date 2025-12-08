import sosis from '@/assets/Products/Roti Sosis.jpg';
import cokelat from '@/assets/Products/Roti Cokelat.jpg';
import keju from '@/assets/Products/Roti Keju.jpg';
import serikaya from '@/assets/Products/Roti Serikaya.jpg';
import kopi from '@/assets/Products/Roti Kopi.jpg';
import smallcake from '@/assets/Products/Small Cake.jpg';
import bigcake from '@/assets/Products/Big Cake.jpg';
import kuesus from '@/assets/Products/Kue Sus.jpg';
import fruitpie from '@/assets/Products/Fruit Pie.jpg';

export const products = [
    // Roti
    { id: 1, name: 'Sosis', category: 'bread', price: 3000, 
    description: 'Potongan Sosis', 
    longDescription: 'Roti lembut dan fluffy yang diisi dengan potongan sosis gurih. Dipanggang hingga keemasan untuk menciptakan kombinasi sempurna antara roti dan isian sosis yang lezat.',
    image: sosis, isNew: false, tags: ['gurih', 'daging', 'camilan']
    },
    { id: 2, name: 'Cokelat', category: 'bread', price: 3000, 
    description: 'Selai Cokelat', 
    longDescription: 'Roti lembut dan fluffy yang diisi dengan cokelat kaya dan creamy. Dipanggang dengan sempurna hingga keemasan.',
    image: cokelat, isNew: false, tags: ['gurih', 'cokelat', 'manis']
    },
    { id: 3, name: 'Keju', category: 'bread', price: 3000, 
    description: 'Keju Parut',
    longDescription: 'Roti lembut dan fluffy yang diisi dengan keju parut yang gurih dan lezat. Dipanggang hingga keemasan untuk menciptakan rasa yang kaya dan tekstur yang lembut.',
    image: keju, isNew: false, tags: ['gurih', 'keju', 'manis']
    },
    { id: 4, name: 'Serikaya', category: 'bread', price: 3000, 
    description: 'Selai Serikaya', 
    longDescription: 'Roti lembut dan fluffy yang diisi dengan selai serikaya manis dan harum. Dipanggang hingga keemasan untuk menciptakan kombinasi sempurna antara roti dan isian serikaya yang lezat.',
    image: serikaya, isNew: false, tags: ['manis', 'selai', 'gurih']
    },
    { id: 5, name: 'Roti Kopi', category: 'bread', price: 6000, 
    description: 'Bubuk Kopi', 
    longDescription: 'Roti lembut dan fluffy yang diisi dengan bubuk kopi aromatik. Dipanggang hingga keemasan untuk menciptakan rasa kopi yang kaya dan tekstur yang lembut.',
    image: kopi, isNew: false, tags: ['manis', 'kopi', 'harum']
    },
  
    // Kue
    { id: 6, name: 'Kue Kecil', category: 'cakes', price: 70000, 
    description: 'Ulang Tahun, Hadiah, dll.', 
    longDescription: 'Kue kecil yang cantik dan lezat, sempurna untuk merayakan ulang tahun, memberikan hadiah, atau acara spesial lainnya. Dihias dengan indah dan memiliki rasa yang menggugah selera.',
    image: smallcake, isNew: true, tags: ['kue', 'perayaan', 'cokelat']
    },
    { id: 7, name: 'Kue Besar', category: 'cakes', price: 120000, 
    description: 'Anniversary, Pernikahan, dll.', 
    longDescription: 'Kue besar yang indah dan lezat, cocok untuk merayakan anniversary, pernikahan, atau acara spesial lainnya. Dihias dengan elegan dan memiliki rasa yang menggugah selera.',
    image: bigcake, isNew: false, tags: ['kue', 'pesta', 'mewah']
    },
  
    // Dessert
    { id: 8, name: 'Kue Sus', category: 'dessert', price: 3000, 
    description: 'Susu', 
    longDescription: 'Kue sus yang lezat dengan isian krim susu yang lembut dan manis. Cocok sebagai camilan atau hidangan penutup.',
    image: kuesus, isNew: false, tags: ['manis', 'krim', 'camilan']
    },
    { id: 9, name: 'Pie Buah', category: 'dessert', price: 3000, 
    description: 'Buah-buahan', 
    longDescription: 'Pie buah yang segar dan lezat, diisi dengan campuran buah-buahan pilihan. Cocok sebagai camilan atau hidangan penutup.',
    image: fruitpie, isNew: true, tags: ['manis', 'buah', 'segar']
    },
]