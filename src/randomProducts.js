import { Chance } from "chance";
const chance = new Chance();

export function randomProducts(count) {
  const products = [];

  for (let i = 0; i < count; i++) {
    const product = {
      id: chance.guid(),
      name: chance.capitalize(chance.word()),
      description: chance.capitalize(
        chance.sentence({ words: chance.integer({ min: 5, max: 10 }) })
      ),
      color: chance.pickone([
        "Gold",
        "Green",
        "Orange",
        "Purple",
        "White",
        "Black",
      ]),
      category: chance.pickone([
        "AK-47",
        "AWP",
        "Glock-18",
        "M4A4",
        "MAC-10",
        "MAG-7",
        "MP9",
        "Tec-9",
        "XM1014",
      ]),
      price: chance.integer({ min: 10, max: 9999 }),
      rating: chance.floating({ min: 0, max: 5, fixed: 1 }),
      imageUrl: `/images/${chance.integer({ min: 1, max: 10 })}.png`,
    };

    products.push(product);
  }

  return products;
}
