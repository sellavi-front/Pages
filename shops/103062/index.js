import './fixes/fixes.js'
import './template/template.js'
import renderBanner from "./components/banner/banner.js"
import fixCategories from "./components/categories/categories.js"
import pages from "./pages/pages.js";

if(pages.home) {
  renderBanner()
  fixCategories()
}