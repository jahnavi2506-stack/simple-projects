const trafficLight = 'yellow';

if(trafficLight === 'green') {
    console.log('Go');
} else if(trafficLight === 'yellow') {
  console.log('Wait');
} else if( trafficLight === 'red') {
    console.log('Stop') ;
  } else {
    console.log('Traffic Light is broken');
  }

  switch(trafficLight) {

    case 'green':
     console.log('Go');
     break;

     case 'yellow':
     console.log('Wait');
     break;  

     case 'green':
     console.log('Go');
     break; 
     
     case 'red':
     console.log('Stop');
     break;
     default:
          console.log('problem');
  }

  const animal = 'giraffe';

switch (animal) {
  case 'cow':
  case 'giraffe':
  case 'dog':
  case 'pig':
    console.log('This animal is not extinct.');
    break;
  case 'dinosaur':
  case 'dodo':
    console.log('This animal is extinct.');
    break;
  default:
    console.log('Unknown animal status.');
}

