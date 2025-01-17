import React from "react";
import {
  FaArrowRight,
} from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';
import courseListReact from "../../../scripts/CoursesListReact";
import { NavLink } from "react-router-dom";


const CourseReact5 = () => {
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
                            <h3>Стилизація компонентів в React</h3>
                            <p>
                                Стилизація компонентів є важливим аспектом розробки користувацьких інтерфейсів. В React існує кілька підходів до стилизації, кожен з яких має свої переваги та недоліки.
                            </p>

                            <h4>Inline-стилі</h4>
                            <p>
                                Inline-стилі задаються безпосередньо в компоненті за допомогою атрибуту style. Вони є об'єктами JavaScript і дозволяють застосовувати стилі динамічно.
                            </p>
                            <pre>
                                <code>
{`const divStyle = {
  color: 'blue',
  backgroundColor: 'lightgray'
};

function StyledComponent() {
  return <div style={divStyle}>Це компонент з inline-стилями.</div>;
}`}
                                </code>
                            </pre>

                            <h4>CSS-модулі</h4>
                            <p>
                                CSS-модулі дозволяють створювати стилі, які є локальними для компонента, запобігаючи конфліктам імен класів. Вони імпортуються як об'єкти з файлами з розширенням .module.css.
                            </p>
                            <pre>
                                <code>
{`import styles from './StyledComponent.module.css';

function StyledComponent() {
  return <div className={styles.blueBackground}>Це компонент з CSS-модулями.</div>;
}`}
                                </code>
                            </pre>

                            <h4>Styled-components</h4>
                            <p>
                                Styled-components - це бібліотека для написання стилів на основі шаблонних рядків. Вона дозволяє створювати компоненти з інкапсульованими стилями.
                            </p>
                            <pre>
                                <code>
{`import styled from 'styled-components';

const StyledDiv = styled.div\`
  color: blue;
  background-color: lightgray;
\`;

function StyledComponent() {
  return <StyledDiv>Це компонент зі styled-components.</StyledDiv>;
}`}
                                </code>
                            </pre>
                            <h4>CSS-in-JS з Emotion</h4>
    <p>
        Emotion - це ще одна популярна бібліотека для написання CSS в JavaScript, яка дозволяє використовувати стилі як у стилізованих компонентах, так і у CSS-об'єктах.
    </p>
    <pre>
        <code>
{`/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const divStyle = css\`
  color: blue;
  background-color: lightgray;
\`;

function StyledComponent() {
  return <div css={divStyle}>Це компонент з Emotion.</div>;
}`}
        </code>
    </pre>


                            <h4>Бібліотеки для стилизації</h4>
                            <p>
                                Існують різні бібліотеки для стилизації, які надають готові компоненти та теми, спрощуючи створення гарних інтерфейсів. Деякі з найпопулярніших бібліотек - це Material-UI та Ant Design.
                            </p>

                            <h5>Material-UI</h5>
                            <p>
                                Material-UI - це бібліотека компонентів React, яка реалізує матеріальний дизайн Google. Вона забезпечує набір готових до використання компонентів та тем.
                            </p>
                            <pre>
                                <code>
{`import React from 'react';
import Button from '@material-ui/core/Button';

function StyledComponent() {
  return <Button variant="contained" color="primary">Material-UI Кнопка</Button>;
}`}
                                </code>
                            </pre>

                            <h5>Ant Design</h5>
                            <p>
                                Ant Design - це бібліотека компонентів React, яка надає великий набір високоякісних компонентів для розробки інтерфейсів користувача.
                            </p>
                            <pre>
                                <code>
{`import React from 'react';
import { Button } from 'antd';

function StyledComponent() {
  return <Button type="primary">Ant Design Кнопка</Button>;
}`}
                                </code>
                            </pre>
                             <h4>Глобальні стилі</h4>
    <p>
        Глобальні стилі можна застосовувати в React за допомогою styled-components або CSS-модулів. Вони дозволяють задавати стилі, які будуть застосовуватись до всього додатка.
    </p>
    <pre>
        <code>
{`import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle\`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
\`;

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledComponent />
    </>
  );
}`}
        </code>
    </pre>

    <h4>Динамічні стилі</h4>
    <p>
        В React можна динамічно змінювати стилі компонентів залежно від стану.
    </p>
    <pre>
        <code>
{`class DynamicStyledComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
  }

  toggleActive = () => {
    this.setState(state => ({ isActive: !state.isActive }));
  }

  render() {
    const divStyle = {
      color: this.state.isActive ? 'red' : 'blue',
      backgroundColor: 'lightgray'
    };

    return (
      <div style={divStyle} onClick={this.toggleActive}>
        Натисніть на мене, щоб змінити стиль.
      </div>
    );
  }
}

ReactDOM.render(<DynamicStyledComponent />, document.getElementById('root'));`}
        </code>
    </pre>

    <h4>Responsive дизайн</h4>
    <p>
        Створення адаптивного дизайну можна досягти за допомогою медіа-запитів у CSS або за допомогою styled-components.
    </p>
    <pre>
        <code>
{`import styled from 'styled-components';

const ResponsiveDiv = styled.div\`
  background-color: lightgray;
  color: blue;

  @media (max-width: 600px) {
    background-color: pink;
  }
\`;

function StyledComponent() {
  return <ResponsiveDiv>Це адаптивний компонент.</ResponsiveDiv>;
}

ReactDOM.render(<StyledComponent />, document.getElementById('root'));`}
        </code>
    </pre>

                            <h4>Довідка</h4>
                            <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='stylingAccordion'>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='stylingHeadingOne'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#stylingCollapseOne' aria-expanded='false' aria-controls='stylingCollapseOne'>
                                            Переваги та недоліки inline-стилів
                                        </button>
                                    </h2>
                                    <div id='stylingCollapseOne' className='accordion-collapse collapse' aria-labelledby='stylingHeadingOne' data-bs-parent='#stylingAccordion'>
                                        <div className='accordion-body'>
                                            <p>Inline-стилі дозволяють легко додавати та змінювати стилі безпосередньо в коді компонентів, але вони не підтримують псевдокласи та псевдоелементи.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='stylingHeadingTwo'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#stylingCollapseTwo' aria-expanded='false' aria-controls='stylingCollapseTwo'>
                                            Використання CSS-модулів
                                        </button>
                                    </h2>
                                    <div id='stylingCollapseTwo' className='accordion-collapse collapse' aria-labelledby='stylingHeadingTwo' data-bs-parent='#stylingAccordion'>
                                        <div className='accordion-body'>
                                            <p>CSS-модулі допомагають уникати конфліктів імен класів, забезпечуючи локальну область видимості для стилів, що покращує підтримку та масштабованість коду.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='stylingHeadingThree'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#stylingCollapseThree' aria-expanded='false' aria-controls='stylingCollapseThree'>
                                            Styled-components
                                        </button>
                                    </h2>
                                    <div id='stylingCollapseThree' className='accordion-collapse collapse' aria-labelledby='stylingHeadingThree' data-bs-parent='#stylingAccordion'>
                                        <div className='accordion-body'>
                                            <p>Styled-components дозволяють писати CSS у JavaScript, забезпечуючи інкапсуляцію стилів та динамічну стилизацію за допомогою пропсів.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='stylingHeadingFour'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#stylingCollapseFour' aria-expanded='false' aria-controls='stylingCollapseFour'>
                                            Популярні бібліотеки для стилизації
                                        </button>
                                    </h2>
                                    <div id='stylingCollapseFour' className='accordion-collapse collapse' aria-labelledby='stylingHeadingFour' data-bs-parent='#stylingAccordion'>
                                        <div className='accordion-body'>
                                            <p>Бібліотеки для стилизації, такі як Material-UI та Ant Design, надають широкий набір компонентів та тем, що допомагають швидко створювати гарні інтерфейси.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>Вибір підходу до стилизації залежить від потреб вашого проекту та особистих вподобань. Знання різних методів допоможе вам створювати більш гнучкі та підтримувані додатки.</p>
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

export default CourseReact5;

