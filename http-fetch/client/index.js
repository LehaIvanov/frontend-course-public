import { Socket } from "node:net";

const tcpSocket = new Socket();

tcpSocket.connect(5173, "localhost");

tcpSocket.on("connect", () => {
  tcpSocket.write(`GET / HTTP/1.1\r\nHost: localhost\r\n\r\n`);
});

tcpSocket.on("data", (data) => {
  console.log(data.toString());
});

tcpSocket.on("end", () => {
  console.log("Disconnected from server");
});

tcpSocket.on("error", (err) => {
  console.error(err);
});

tcpSocket.on("close", () => {
  console.log("Connection closed");
});


/*
Примеры HTTP запросов:

GET / HTTP/1.1\r\nHost: localhost\r\n\r\n

GET /french HTTP/1.1\r\nHost: localhost\r\n\r\n

PATCH / HTTP/1.1\r\nHost: localhost\r\nContent-Type: application/json\r\nContent-Length: 27\r\n\r\n{\"name\": \"Alex\",\"age\": 32}\r\n\r\n

POST / HTTP/1.1\r\nHost: localhost\r\nContent-Type: application/x-www-form-urlencoded\r\nContent-Length: 47\r\n\r\nlogin=Alex&email=alex@mail.com&password=Qwerty1\r\n\r\n
*/

/*
GET запрос с помощью fetch:

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: статус ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Данные успешно получены:', data);
  })
  .catch(error => {
    console.error('Произошла ошибка при fetch-запросе:', error);
  });

console.log('Запрос отправлен, ожидаем ответ...');
*/

/*
POST запрос с помощью fetch:

const createPostUrl = 'https://jsonplaceholder.typicode.com/posts';

const newPostData = {
  title: 'Мой новый пост',
  body: 'Это текст моего первого поста, отправленного через fetch!',
  userId: 1,
};

fetch(createPostUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newPostData),
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: статус ${response.status}`);
    }
    return response.json();
  })
  .then(createdPost => {
    console.log('Пост успешно создан:', createdPost);
  })
  .catch(error => {
    console.error('Ошибка при создании поста:', error);
  });
*/
