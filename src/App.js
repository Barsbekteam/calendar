import June from "./components/June";


function App() {

  return (
    <div className="all container">
      <div className="mounth">
          <h1>Май</h1>
          <h1>Июнь</h1>
          <h1>Июль</h1>
          <h1>Авг.</h1>
          <h1>Сент.</h1>
          <h1>Окт.</h1>
          <h1>Нояб.</h1>
          <h1>Дек.</h1>
          <h1>Янв.</h1>
          <h1>Февр.</h1>
          <h1>Март</h1>
          <h1>Апр.</h1>
          <h1>Май</h1>
      </div>
        <div className="calendar">
            <div className="day">
                <h1>Пн</h1>
                <h1>Ср</h1>
                <h1>Пт</h1>
            </div>
            <June/>
        </div>
        <div className="small">
            Меньше
            <button></button>
            <button style={{background: '#ACD5F2'}}></button>
            <button style={{background: '#7FA8C9'}}></button>
            <button style={{background: '#527BA0'}}></button>
            <button style={{background: '#254E77'}}></button>
            <span style={{marginLeft: '4px'}}>Больше</span>
        </div>
    </div>
  );
}

export default App;
