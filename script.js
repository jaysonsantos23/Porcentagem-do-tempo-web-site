setInterval(() => {
    let conteudo = document.querySelector(".main--clock");
    let currentdate = new Date();

    const day = currentdate.getDate();
    const mounth = ((currentdate.getMonth() + 1) < 10 ? "0" + (currentdate.getMonth() + 1) : (currentdate.getMonth() + 1));
    const year = currentdate.getFullYear();
    const fullyear = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0) ? 366 : 365
    const hours = (currentdate.getHours() < 10 ? "0" + currentdate.getHours() : currentdate.getHours());
    const minutes = (currentdate.getMinutes() < 10 ? "0" + currentdate.getMinutes() : currentdate.getMinutes());
    const seconds = (currentdate.getSeconds() < 10 ? "0" + currentdate.getSeconds() : currentdate.getSeconds());
    let time = `${hours}:${minutes}:${seconds}`;

    conteudo.textContent = time;

    const date = `${day}/${mounth}/${year}`;
    conteudo = document.querySelector(".main--date");
    conteudo.textContent = date;

    const date1 = new Date(`01/01/${currentdate.getFullYear()}`);
    const date2 = new Date(`${mounth}/${day}/${year}`);

    const diffTime = Math.abs(date2 - date1);
    const diffDays = (Math.ceil(diffTime / (1000 * 60 * 60 * 24))) + 1;

    conteudo = document.querySelector(".day--count");
    conteudo.textContent = `Contagem de dias: ${diffDays} dias`;

    let countHourPastYear = diffDays * 24 + hours;
    conteudo = document.querySelector(".hours--count");
    conteudo.textContent = `Contagem de horas: ${countHourPastYear} horas`;

    let countMinutesPastYear = countHourPastYear * 60 + minutes;
    conteudo = document.querySelector(".minutes--count");
    conteudo.textContent = `Contagem de minutos: ${countMinutesPastYear} minutos`;

    let countSecondsPastYear = countMinutesPastYear * 60 + seconds;
    conteudo = document.querySelector(".seconds--count");
    conteudo.textContent = `Contagem de segundos: ${countSecondsPastYear} segundos`;

    const yearPercent = (diffDays / fullyear) * 100;
    let percentPastYear = yearPercent;

    const oneDayPercent = 1 / (fullyear / 100);
    const oneHourPercent = oneDayPercent / 24;
    const currentHourPercent = oneHourPercent * hours;
    percentPastYear += currentHourPercent;

    const oneMinutePercent = oneHourPercent / 60;
    const currentMinutePercent = oneMinutePercent * minutes;
    percentPastYear += currentMinutePercent;

    const oneSecondPercent = oneMinutePercent / 60
    const currentSecondPercent = oneSecondPercent * seconds;
    percentPastYear += currentSecondPercent;

    conteudo = document.querySelector(".year--percent");
    conteudo.textContent = `Porcentagem passada do ano: ${percentPastYear.toFixed(12)}%`;

    let elem = document.querySelector(".yearBar");
    elem.style.width = percentPastYear.toFixed(12) + "%";


    let percentPastDay = (hours / 24) * 100;
    const percentMinute = (((1 / 24) * 100) / 60) * minutes;
    percentPastDay += percentMinute;

    const percentSeconds = ((((1 / 24) * 100) / 60) / 60) * seconds;
    percentPastDay += percentSeconds;

    conteudo = document.querySelector(".day--percent");
    conteudo.textContent = `Porcentagem passada do dia: ${percentPastDay.toFixed(12)}%`;
    elem = document.querySelector(".dayBar");
    elem.style.width = percentPastDay.toFixed(12) + "%";

    let percentPastWeek = ((currentdate.getDay()) / 7) * 100;
    const hourWeekPercent = ((1 / 7) * 100) / 24;
    percentPastWeek += (hourWeekPercent * hours);

    const minuteWeekPercent = (((1 / 7) * 100) / 24) / 60;
    percentPastWeek += (minuteWeekPercent * minutes);

    const secondWeekPercent = ((((1 / 7) * 100) / 24) / 60) / 60;
    percentPastWeek += (secondWeekPercent * seconds);

    conteudo = document.querySelector(".week--percent");
    conteudo.textContent = `Porcentagem passada da semana: ${percentPastWeek.toFixed(12)}%`;
    elem = document.querySelector(".weekBar");
    elem.style.width = percentPastWeek.toFixed(12) + "%";


    const daysInMouth = new Date(year, mounth, 0).getDate();
    let percentPastMouth = (day / daysInMouth) * 100;

    const hourMouthPercent = ((1 / 30) * 100) / 24;
    percentPastMouth += (hourMouthPercent * hours);

    const minuteMouthPercent = (((1 / 30) * 100) / 24) / 60;
    percentPastMouth += (minuteMouthPercent * minutes);

    const secondMouthPercent = ((((1 / 30) * 100) / 24) / 60) / 60;
    percentPastMouth += (secondMouthPercent * seconds);

    conteudo = document.querySelector(".mouth--percent");
    conteudo.textContent = `Porcentagem passada do mês: ${percentPastMouth.toFixed(12)}%`;
    elem = document.querySelector(".mouthBar");
    elem.style.width = percentPastMouth.toFixed(12) + "%";

}, 50);