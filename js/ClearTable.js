function clearTable(){
    $('#result-table').html(`<tr id="heads">
     <td class="text">X</td>
     <td class="text">Y</td>
     <td class="text">R</td>
     <td class="text">Текущее время</td>
     <td class="text">Время работы скрипта</td>
     <td class="text">Результат</td>
     </tr>`);
    window.sessionStorage.clear();
}