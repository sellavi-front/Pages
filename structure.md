#**Sellavi Developers Department**
**Project structure (2021)**
***
**Structure on the Hosting**
```
/dev [папка разработки]
  /tasks --> [задачи в разработке]
  /src --> [готовые ресурсы]
  /components --> [готовые визуальные компонент]
    /ComponentName --> [папка компонента]
      ComponentName.js --> [исходный файл компонента]
      ComponentName.css --> [файл стилей компонента]
      ComponentNameExampleUse.md --> [инструкция по подключению]
  /scripts --> [фиксы багов и т.д.]
    /js
      /FixName
        FixName.js --> [исходный файл фикса]
        FixName.md --> [инструкция по подключению]
    /css
      /FixName
        FixName.css --> [исходный файл фикса]
        FixName.md --> [инструкция по подключению]
  /templates --> [готовые шаблоны]
    /TemplateOne
      /styles
        /blockName1 --> [блоки магазина]
          index.css --> [фикс js]
          index.js --> [фикс css]
      Template.js
  /API --> [прослойка для работы с API Sellavi]

/public [папка с готовыми проектами, магазинами]
  /shops [папка разрабатываемых магазинов]
    /123456 --> [папка исходников магазина]
      /blocks --> [блоки магазина]
        /BlockName
          BlockName.js
          BlockName.css
      /docs --> [эквайринг]
        [структура такая же, как в папке /shops/requsites/]
      index.js
      index.css
  /projects [проекты Sellavi. Например, CakeConstructor]
    /projectName --> [папка проекта]
```



