## Термины, понятия

Плагин - _говорит babel как именно преобразовать js-файл_
Пресет - _набор предопределенных плагинов_

Пример использоваться плагина plugin-transform-arrow-functions для преобразования стрелочных функция в обычную js-функцию

```bash
./node_modules/.bin/babel src --out-dir lib --plugins=@babel/plugin-transform-arrow-functions
```

Пример использования пресет preset-env, который включает в себя все плагины для преобразования современного JavaScript’а.

```bash
./node_modules/.bin/babel src --out-dir lib --presets=@babel/preset-env
```

Для того, чтобы не писать огромную портянку через cli babel, можно воспользоваться конфигурационным файлом.
