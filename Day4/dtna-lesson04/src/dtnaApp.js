import DtnaFuncComp from './components/DtnaFuncComp';
function dtnaApp() {
  return (
    <div className="container border mt-3">
      <h1 style={{textAlign:'center', color:'blue', fontFamily:'initial'}}>Component-Props- State Lesson04 -Đoàn Thị Ngọc Ánh</h1>
      <hr></hr>
       <div className='alert alert-danger'>
       <DtnaFuncComp name="Đoàn Thị Ngọc Ánh" age="20" address="Số 59, Cầu Giấy" />
       </div>
    </div>
  );
}

export default dtnaApp;
