import "./Category.css"

const Category = ({onCategoryClick, changeIconStyle}) => {

  const categories = [
    'Alcohol-cocktail',
    'Biscuits and cookies',
    'Bread',
    'Cereals',
    'Condiments and sauces',
    'Desserts',
    'Drinks',
    'Main course',
    'Pancake',
    'Preps',
    'Preserves',
    'Salad',
    'Sandwiches',
    'Side dish',
    'Soup',
    'Starter',
  ];
  
    return <section className="category">
      <h2>Category</h2>
      <ul className="recipe-category">
      {categories.map((category, index) => (
        <li key={index} onClick={()=>{onCategoryClick(category);changeIconStyle()}}>{category} </li>
      ))}
      </ul>
      </section>
  }
  
  export default Category