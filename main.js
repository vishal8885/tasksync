function showDialog() {
    window.location.href = window.location +'#divModel';
    form =  document.getElementById('form1');
    document.getElementById('v1').textContent = form['value1'].value;
    document.getElementById('v2').textContent = form['value2'].value;
    document.getElementById('v3').textContent = form['value3'].value;
}