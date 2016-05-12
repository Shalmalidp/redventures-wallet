import $ from 'jquery';
//console.log($);
let c1 = $('.card-one');
let c2 = $('.card-two');
let c3 = $('.card-three');

let details = $('.details-container');

c1.on('click',function(){
  let pagedata = infoC1() ;
  details.append(pagedata);
})

c2.on('click', function(){
  let pagedata = infoC2() ;
  details.append(pagedata);
});

c3.on('click',function(){
  let pagedata = infoC3() ;
  details.append(pagedata);
});





function infoC1(){
  details.text(' ');
  return`
    <h3 class='hd'>Current Balance <span class = "tot">$729.<small class='sm'>00</small></span></h3>
    <hr>
    <div class='exp1'>
      <div class='ico'> <span class ='ic'>- </span></div>
      <div class='items'> 
        <h4>Apple iPhone 6, 6g GB</h4>
        <h6>Electronics #3456745 - 12 July, 2015</h6>
      </div>
      <div class='amt'>$650.<small class='sm'>00</small></div>
    </div>
    <hr>
    <div class='exp1'>
      <div class='ico'> <span class ='ic'>- </span></div>
      <div class='items'> 
        <h4>Energy Bill</h4>
        <h6>#45656 - 11 July, 2015</h6>
      </div>
      <div class='amt'>$84.<small class='sm'>96</small></div>
    </div>
    <hr>
    <div class='exp1'>
      <div class='ico'> <span class ='icp'> + </span></div>
      <div class='items'> 
        <h4>Founds Added</h4>
        <h6>Payment # 341123 - 11 july, 2015</h6>
      </div>
      <div class='amt'>$900.<small class='sm'>00</small></div>
    </div>
    <hr>

    <div class='exp1'>
      <div class='ico'> <span class ='ic'>- </span></div>
      <div class='items'> 
        <h4>Mega Image SRL</h4>
        <h6>Food&Health #32535 - 11 July, 2015</h6>
      </div>
      <div class='amt'>$112.<small class='sm'>75</small></div>
    </div>
    <hr>
    <div class='exp1'>
      <div class='ico'> <span class ='ic'>- </span></div>
      <div class='items'> 
        <h4>ATM DV24</h4>
        <h6>#786543 - 09 July,2015</h6>
      </div>
      <div class='amt'>$200.<small class='sm'>00</small></div>    </div>
    <hr>
    <div class='exp1'>
      <div class='ico'> <span class ='ic'>- </span></div>
      <div class='items'> 
        <h4>Lukoil Station</h4>
        <h6>Gas # 345656</h6>
      </div>
      <div class='amt'>$190.<small class='sm'>48</small></div>
    </div>
  `;
}

function infoC2(){
  details.text(' ');
  return`
    <h3 class='hd'>Current Balance <span class="tot">$349.<small class='sm'>00</small></span></h3>
    <hr>
    <div class='exp1'>
      <div class='ico'> <span class ='ic'>- </span></div>
      <div class='items'> 
        <h4>Energy Bill</h4>
        <h6>#45656 - 11 July, 2015</h6>
      </div>
      <div class='amt'>$84.<small class='sm'>96</small></div>
    </div>
    <hr>
    <div class='exp1'>
      <div class='ico'> <span class ='icp'> + </span></div>
      <div class='items'> 
        <h4>Founds Added</h4>
        <h6>Payment # 341123 - 11 july, 2015</h6>
      </div>
      <div class='amt'>$900.<small class='sm'>00</small></div>
    </div>
    <hr>

    <div class='exp1'>
      <div class='ico'> <span class ='ic'>- </span></div>
      <div class='items'> 
        <h4>Mega Image SRL</h4>
        <h6>Food&Health #32535 - 11 July, 2015</h6>
      </div>
      <div class='amt'>$112.<small class='sm'>75</small></div>
    </div>
   <hr>
    <div class='exp1'>
      <div class='ico'> <span class ='ic'>- </span></div>
      <div class='items'> 
        <h4>Lukoil Station</h4>
        <h6>Gas # 345656</h6>
      </div>
      <div class='amt'>$190.<small class='sm'>48</small></div>
    </div>
  `;
}

function infoC3(){
  details.text(' ');
  return`
    <h3 class='hd'>Current Balance <span class = 'tot'>$0.<small class='sm'>00</small></span></h3>
    <hr>
    <h1> No Pending Balance</h1>
    `;
}