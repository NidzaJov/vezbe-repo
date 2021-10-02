let main = function() {

    let days = ['Sunday', 'Monday', 'Thursday', 'Wednesday', 'Tuesday', 'Frieday', 'Saturday'];
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Avg', 'Sep', 'Oct', 'Nov', 'Dec']

    let clock = document.querySelector('#clock');
    let dater = document.querySelector('#date');
    

    let paddedZero = function(number) {
        return number.toString().padStart(2, '0');
    }

    let refresh = function() {
        let timeAndDate = new Date();
        clock.textContent = paddedZero(timeAndDate.getHours()) + ':' + paddedZero(timeAndDate.getMinutes()) + ':' + paddedZero(timeAndDate.getSeconds())
        dater.textContent = months[timeAndDate.getMonth()] + ' ' + paddedZero(timeAndDate.getDate()) +  ' ' + timeAndDate.getFullYear() + ', ' + days[timeAndDate.getDay()];
    }

    let timePassing = setInterval(refresh, 500);
    
    
   alarmContainer = document.createElement('div');
   clock.parentNode.insertBefore(alarmContainer, clock.nextElementSibling);
   textBoxHours = document.createElement('input');
   labelHours = document.createElement('label');
   textBoxMinutes = document.createElement('input');
   labelMinutes = document.createElement('label');
   alarmContainer.appendChild(labelHours);
   alarmContainer.appendChild(textBoxHours);
   alarmContainer.appendChild(labelMinutes);
   alarmContainer.appendChild(textBoxMinutes);
   button = document.createElement('button');
   alarmContainer.appendChild(button);
   button.textContent = 'Set alarm';
   document.querySelectorAll('label')[0].textContent = 'Hours:';
   document.querySelectorAll('label')[1].textContent = 'Minutes:';
   settedAlarmField = document.createElement('p');

   let AlarmSettingListener = function() {
       let settedHours = Number(textBoxHours.value);
       let settedMinutes = Number(textBoxMinutes.value);

       if (isNaN(settedHours) || isNaN(settedMinutes) || settedHours !== parseInt(settedHours) || settedMinutes !== parseInt(settedMinutes))
       {
            alert('Please enter whole numeric values');
            textBoxHours.value = '';
            textBoxMinutes.value = '';
       }
       else if ( settedHours > 23 || settedMinutes > 59 ) {
           alert('Plese, hours must be from 0 to 23 and minutes from 0 to 59');
           textBoxHours.value = '';
           textBoxMinutes.value = '';
       }
       else{
           
           let currentDate = new Date();
           let currentTimestamp = currentDate.getTime();
           let settedTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), settedHours, settedMinutes, 0);
           let settedTimestamp = settedTime.getTime();
           if (currentTimestamp > settedTimestamp) {
               alert('Alarm in the past');
               textBoxHours.value = '';
               textBoxMinutes.value = '';
           }
           else {
               
               button.parentNode.insertBefore(settedAlarmField, button);
               settedAlarmField.textContent = settedHours + ':' + settedMinutes;
               textBoxHours.value = '';
               textBoxMinutes.value = '';
           }
       }
   }

   button.addEventListener('click', AlarmSettingListener);

   let alarmListening = function() {
        
        if (settedAlarmField.textContent !== '') {
            hoursAndMinutesArray = settedAlarmField.textContent.toString().split(':');
            let settedHours = Number(hoursAndMinutesArray[0]);
            let settedMinutes = Number(hoursAndMinutesArray[1]);
            let currentDate = new Date();

            if(currentDate.getHours() == settedHours && currentDate.getMinutes() == settedMinutes) {
                alert('Ring!!!!!')
                settedAlarmField.textContent = '';
            }
        }
   }

   let ringer = setInterval(alarmListening, 500);

}

main();