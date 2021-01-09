# API for TIMP

## /api/products/:productId
Возвращает Object, в случае отсутствия id в БД возвращает пустой объект

## /api/search/:searchString
Возвращает массив объектов, в полях agent, name или categories[] найдена строка searchString. Также возвращает пустой массив при отсутствии строки поиска в полях предметов БД

## /api/categories/:categoryName
Возвращает массив объектов, в которых поле categories[] соответствующих предметов БД содержало categoryName 
