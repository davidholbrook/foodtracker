// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/meals/new" page={NewMealPage} name="newMeal" />
      <Route path="/meals/{id:Int}/edit" page={EditMealPage} name="editMeal" />
      <Route path="/meals/{id:Int}" page={MealPage} name="meal" />
      <Route path="/meals" page={MealsPage} name="meals" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
