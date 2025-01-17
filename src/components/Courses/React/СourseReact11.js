import React from "react";
import {
  FaArrowRight,
} from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';
import courseListReact from "../../../scripts/CoursesListReact";
import { NavLink } from "react-router-dom";


const CourseReact11 = () => {
  return (
    <>
      {/* ===================== Course Single Page start ===================== */}
      <div className='service-area pd-top-120 pd-bottom-90'>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-4 col-12'>
                <div className='td-sidebar service-sidebar'>
                    <div className='widget widget_catagory'>
                        <Link className='btn btn-border-base' to='/courses#react'>
                      Назад до курсів
                    </Link>
                  <h5 className='widget-title mt-4 mb-2'>
                    Уроки по React JS
                  </h5>
                        <ul className='catagory-items'>
                            {courseListReact.map((data, index) => (
                                <div key={index}>
                                    <li>
                            <NavLink to={data.link}  className={({ isActive, isPending }) =>
                              isPending ? "pending" : isActive ? "active" : ""
                            }>{data.title}</NavLink>
                        </li>
                                </div>
                            ))}
                        </ul>
                    </div>
                    <div className='widget widget_author text-center'>
                        <div className='thumb'>
                            <img src='assets/img/about/about-pages.png' alt='img' className='service-banner-image' />
                        </div>
                        <div className='details'>
                            <Link className='btn btn-border-base' to='/about'>
                                Дізнайтесь більше про нас 
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-8'>
                <div className='blog-details-page-content'>
                    <div className='single-blog-inner mb-0'>
                        <div className='thumb'>
                            <img src='assets/img/about/lesson-image-react_4.jpeg' alt='img' className="w-100 h-20"  style={{height: "400px", objectFit: "cover", marginBottom: "20px"}}/>
                        </div>
                        <div className='details'>
                            <h3>Додаткові хуки в React</h3>
                            <p>
                                Окрім основних хуків <code>useState</code> та <code>useEffect</code>, React також пропонує декілька додаткових хуків, які допомагають вирішувати більш специфічні задачі. У цьому розділі ми розглянемо <code>useContext</code>, <code>useReducer</code>, <code>useRef</code>, <code>useMemo</code> та <code>useCallback</code>.
                            </p>

                            <h4>useContext</h4>
                            <p>
  <code>useContext</code> — це хук, який дозволяє отримувати значення з контексту в функціональних компонентах. Контекст у React призначений для передачі даних через дерево компонентів без необхідності явно передавати пропси на кожному рівні. Це особливо корисно для глобальних даних, таких як поточний користувач, тема або мова інтерфейсу.
</p>
<p>
  Використання <code>useContext</code> спрощує доступ до значення контексту порівняно з традиційним підходом через <code>Context.Consumer</code>. Однак, варто пам'ятати, що зміни в контексті спричиняють повторний рендер всіх компонентів, що використовують цей контекст, тому важливо обережно використовувати контекст для уникнення зайвих рендерів.
</p>
<h6>Концепція і важливість:</h6>
<ul>
    <li>useContext використовується для споживання контексту, створеного за допомогою React.createContext. Це дозволяє уникнути проп-дрилінгу (передавання пропсів через багато рівнів компонентів), забезпечуючи доступ до глобальних даних з будь-якого компонента в дереві компонентів.</li>
    <li>Контекст особливо корисний для таких задач, як управління темою інтерфейсу, автентифікація користувачів, налаштування мови і передача будь-яких даних, які можуть бути потрібні в багатьох місцях додатка.</li>
</ul>
<h6>Оптимізація і запобігання зайвим рендерам:</h6>
<ul>
    <li>Контекст може спричинити повторний рендер всіх дочірніх компонентів, коли його значення змінюється. Це може бути проблемою для продуктивності, якщо дерево компонентів велике. Використовуйте мемоізацію або розділяйте контекст на кілька менших, щоб обмежити область впливу зміни даних.</li>
</ul>
                            <pre>
                                <code>
{`import React, { useContext } from 'react';

const MyContext = React.createContext();

function MyComponent() {
  const value = useContext(MyContext);

  return <div>{value}</div>;
}`}
                                </code>
                            </pre>
                            <p>
                                У цьому прикладі <code>useContext</code> отримує значення з <code>MyContext</code> і відображає його в компоненті.
                            </p>

                            <h4>useReducer</h4>
<p>
  <code>useReducer</code> — це хук, який дозволяє управляти станом компонента за допомогою редуктора. Він корисний для компонентів зі складною логікою стану або коли стан компонента залежить від попереднього стану. <code>useReducer</code> приймає два основні аргументи: редуктор (функція, яка визначає, як змінюється стан) і початковий стан.
</p>
<p>
  Редуктор є функцією, яка приймає поточний стан і дію, і повертає новий стан. Це схоже на те, як працює <code>redux</code>, але на рівні компонентів. Використання <code>useReducer</code> може зробити код більш передбачуваним і зручним для тестування, особливо коли стан складається з кількох підстанів або залежить від складної логіки обробки дій.
</p>
<h6>Концепція і важливість:</h6>
<ul>
    <li>useReducer надає альтернативу useState для управління станом компонента. Він особливо корисний, коли логіка стану складна або коли стан залежить від попереднього стану.</li>
    <li>Редуктор — це чиста функція, яка приймає поточний стан і дію, а потім повертає новий стан. Це дозволяє централізувати логіку оновлення стану, роблячи її більш передбачуваною та легкою для тестування.</li>
</ul>
<h6>Переваги і використання:</h6>
<ul>
    <li>Використання useReducer може зробити код більш структурованим і зрозумілим, особливо якщо потрібно обробляти складні сценарії оновлення стану.</li>
    <li>Це також полегшує оптимізацію і дебаггінг стану, оскільки логіка оновлення стану зосереджена в одному місці.</li>
</ul>
                            <pre>
                                <code>
{`import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}`}
                                </code>
                            </pre>
                            <p>
                                У цьому прикладі <code>useReducer</code> використовується для управління станом лічильника.
                            </p>

                            <h4>useRef</h4>
                            <p>
  <code>useRef</code> — це хук, який повертає змінний об'єкт з властивістю <code>.current</code>. Цей об'єкт можна використовувати для зберігання мутованих значень між рендерами без їх повторного рендерингу. <code>useRef</code> також часто використовується для доступу до DOM-елементів або зберігання попередніх значень змінних.
</p>
<p>
  На відміну від <code>useState</code>, зміна значення <code>useRef</code> не спричиняє повторний рендер компонента. Це робить його корисним для зберігання будь-якої інформації, яка не впливає безпосередньо на візуальне представлення компонента, але повинна бути доступною між рендерами.
</p>
<h6>Концепція і важливість:</h6>
<ul>
    <li>useRef створює об'єкт з властивістю .current, яка зберігає значення, що зберігається між рендерами. Це корисно для зберігання значень, які не потребують повторного рендерингу, наприклад, попередні значення стану або посилання на DOM-елементи.</li>
    <li>useRef також може використовуватись для створення постійних значень, які не змінюються між рендерами.</li>
</ul>
<h6>Переваги і використання:</h6>
<ul>
    <li>useRef часто використовується для доступу до DOM-елементів без повторного рендерингу, що забезпечує більш ефективну роботу з маніпуляцією DOM.</li>
    <li>Він також корисний для зберігання мутованих значень, які повинні бути доступні між рендерами, але не впливають на рендеринг компонента.</li>
</ul>
                            <pre>
                                <code>
{`import React, { useRef } from 'react';

function TextInput() {
  const inputEl = useRef(null);

  const focusInput = () => {
    inputEl.current.focus();
  };

  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={focusInput}>Focus the input</button>
    </div>
  );
}`}
                                </code>
                            </pre>
                            <p>
                                У цьому прикладі <code>useRef</code> використовується для доступу до DOM-елемента інпуту і фокусування на ньому.
                            </p>

                            <h4>useMemo та useCallback</h4>
                            <p>
                                Хуки <code>useMemo</code> та <code>useCallback</code> використовуються для оптимізації продуктивності, зменшуючи кількість зайвих обчислень та створень функцій.
                            </p>
                            <h5>useMemo</h5>
                          <p>
  <code>useMemo</code> — це хук, який використовується для оптимізації продуктивності компонентів. Він приймає функцію та масив залежностей і повертає запам'ятоване значення, обчислене цією функцією. Значення буде обчислюватись знову лише тоді, коли одна з залежностей зміниться.
</p>
<p>
  Основна мета <code>useMemo</code> — уникнути зайвих обчислень при кожному рендері. Це особливо корисно для важких обчислень або функцій, які повертають великі масиви чи об'єкти. Варто зазначити, що <code>useMemo</code> слід використовувати лише тоді, коли є реальні проблеми з продуктивністю, оскільки невиправдане використання може ускладнити код без значних переваг.
</p>
<h6>Концепція і важливість:</h6>
<ul>
    <li>useMemo мемоізує обчислені значення, зменшуючи кількість непотрібних обчислень під час рендерингу. Він приймає функцію і масив залежностей, і обчислює значення тільки тоді, коли залежності змінюються.</li>
    <li>Це особливо корисно для важких обчислень або функцій, які повертають великі об'єкти або масиви.</li>
</ul>
<h6>Оптимізація і запобігання зайвим рендерам:</h6>
<ul>
    <li>Використання useMemo може значно покращити продуктивність, особливо в компонентах, де обчислення дорогі або де використання великих об'єктів може спричинити зайві рендери.</li>
    <li>Важливо використовувати useMemo раціонально, оскільки надмірне використання може ускладнити код без значних переваг для продуктивності.</li>
</ul>
                            <pre>
                                <code>
{`import React, { useMemo } from 'react';

function ExpensiveComponent({ input }) {
  const expensiveValue = useMemo(() => {
    return computeExpensiveValue(input);
  }, [input]);

  return <div>{expensiveValue}</div>;
}

function computeExpensiveValue(input) {
  // дорогоцінні обчислення
  return input * 2;
}`}
                                </code>
                            </pre>
                            <p>
                                У цьому прикладі <code>useMemo</code> запам'ятовує результат функції <code>computeExpensiveValue</code> до зміни значення <code>input</code>.
                            </p>

                            <h5>useCallback</h5>
                           <p>
  <code>useCallback</code> — це хук, який повертає запам'ятовану версію функції, яка змінюється лише при зміні однієї з залежностей. Він приймає функцію та масив залежностей як аргументи. <code>useCallback</code> корисний для оптимізації рендерів дочірніх компонентів, які залежать від колбек-функцій.
</p>
<p>
  Коли функція передається як пропс до дочірнього компонента, кожен рендер батьківського компонента створює нову версію цієї функції. Це може спричиняти зайві рендери дочірнього компонента. Використовуючи <code>useCallback</code>, можна запобігти створенню нових функцій при кожному рендері, що оптимізує продуктивність.
</p>
<h6>Концепція і важливість:</h6>
<ul>
    <li>useCallback мемоізує колбек-функції, зменшуючи кількість зайвих створень функцій при кожному рендері. Він приймає функцію і масив залежностей, і повертає мемоізовану версію функції, яка змінюється тільки тоді, коли змінюються залежності.</li>
    <li>Це корисно для оптимізації рендерів дочірніх компонентів, які залежать від функцій-пропсів.</li>
</ul>
<h6>Оптимізація і запобігання зайвим рендерам:</h6>
<ul>
    <li>Використання useCallback дозволяє запобігти зайвим рендерам компонентів, оскільки функція не змінюється, якщо залежності залишаються незмінними.</li>
    <li>Це особливо важливо для компонентів, які використовують React.memo або інших механізмів оптимізації рендерингу.</li>
</ul>
                            <pre>
                                <code>
{`import React, { useState, useCallback } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return <ChildComponent increment={increment} />;
}

function ChildComponent({ increment }) {
  return <button onClick={increment}>Increment</button>;
}`}
                                </code>
                            </pre>
                            <p>
                                У цьому прикладі <code>useCallback</code> запам'ятовує функцію <code>increment</code>, що зменшує кількість зайвих рендерів дочірнього компонента.
                            </p>

                            <h4>Довідка</h4>
                            <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='additionalHooksAccordion'>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='additionalHooksHeadingOne'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#additionalHooksCollapseOne' aria-expanded='false' aria-controls='additionalHooksCollapseOne'>
                                            useContext
                                        </button>
                                    </h2>
                                    <div id='additionalHooksCollapseOne' className='accordion-collapse collapse' aria-labelledby='additionalHooksHeadingOne' data-bs-parent='#additionalHooksAccordion'>
                                        <div className='accordion-body'>
                                            <p>Хук <code>useContext</code> дозволяє отримувати значення контексту без використання компонента <code>Context.Consumer</code>.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='additionalHooksHeadingTwo'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#additionalHooksCollapseTwo' aria-expanded='false' aria-controls='additionalHooksCollapseTwo'>
                                            useReducer
                                        </button>
                                    </h2>
                                    <div id='additionalHooksCollapseTwo' className='accordion-collapse collapse' aria-labelledby='additionalHooksHeadingTwo' data-bs-parent='#additionalHooksAccordion'>
                                        <div className='accordion-body'>
                                            <p>Хук <code>useReducer</code> використовується для управління станом зі складною логікою або коли стан залежить від попереднього стану.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='additionalHooksHeadingThree'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#additionalHooksCollapseThree' aria-expanded='false' aria-controls='additionalHooksCollapseThree'>
                                            useRef
                                        </button>
                                    </h2>
                                    <div id='additionalHooksCollapseThree' className='accordion-collapse collapse' aria-labelledby='additionalHooksHeadingThree' data-bs-parent='#additionalHooksAccordion'>
                                        <div className='accordion-body'>
                                            <p>Хук <code>useRef</code> дозволяє зберігати змінні значення між рендерами або доступ до DOM-елементів.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='additionalHooksHeadingFour'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#additionalHooksCollapseFour' aria-expanded='false' aria-controls='additionalHooksCollapseFour'>
                                            useMemo та useCallback
                                        </button>
                                    </h2>
                                    <div id='additionalHooksCollapseFour' className='accordion-collapse collapse' aria-labelledby='additionalHooksHeadingFour' data-bs-parent='#additionalHooksAccordion'>
                                        <div className='accordion-body'>
                                            <p>Хуки <code>useMemo</code> та <code>useCallback</code> використовуються для оптимізації продуктивності, зменшуючи кількість зайвих обчислень та створень функцій.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>Тепер ви знаєте, як використовувати додаткові хуки для розширення можливостей ваших React-компонентів.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
      {/* ===================== Course Single Page  End ===================== */}
    </>
  );
};

export default CourseReact11;

