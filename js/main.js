//https://github.com/shevabam/breaking-bad-quotes

document.querySelector('section').classList.add('hidden')

document.querySelector('button').addEventListener('click', getFetch)



function getFetch(){
  // const num = document.querySelector('input').value
  // const url = `https://breaking-bad-quotes.herokuapp.com/v1/quotes` //og heroku from github (not mine)

  const url = `https://breaking-bad-database-builder.herokuapp.com/api` //my heroku :)

  document.querySelector('#WW').classList.add('hidden')
  document.querySelector('#JP').classList.add('hidden')
  document.querySelector('#GF').classList.add('hidden')
  document.querySelector('#HS').classList.add('hidden')
  document.querySelector('#ME').classList.add('hidden')
  document.querySelector('#SG').classList.add('hidden')
  document.querySelector('#SW').classList.add('hidden')
  document.querySelector('#B').classList.add('hidden')
  document.querySelector('#HECT').classList.add('hidden')
  document.querySelector('#WJ').classList.add('hidden')

  if( document.querySelector('section').classList.contains('hidden')){
    document.querySelector('section').classList.toggle('hidden')
    }


  

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        // console.log(data) dont need to see this everytime
        let num = Math.floor(Math.random() *data.length) //added this for using my heroku/mongoDB
        document.querySelector('h2').innerText = '"'+data[num].quote+'"'
        document.querySelector('h3').innerText = '-' + data[num].author

          if(data[num].author ==='Walter White'){
            document.getElementById('WW').classList.remove('hidden')

          }else if(data[num].author ==='Jesse Pinkman'){
            document.getElementById('JP').classList.remove('hidden')

          }else if(data[num].author ==='Gustavo Fring'){
            document.getElementById('GF').classList.remove('hidden')
            
          }else if(data[num].author ==='Hank Schrader'){
            document.getElementById('HS').classList.remove('hidden')

          }else if(data[num].author ==='Mike Ehrmantraut'){
            document.getElementById('ME').classList.remove('hidden')

          }else if(data[num].author ==='Saul Goodman'){
            document.getElementById('SG').classList.remove('hidden')

          }else if(data[num].author ==='Skyler White'){
            document.getElementById('SW').classList.remove('hidden')

          }else if(data[num].author ==='Badger'){
            document.getElementById('B').classList.remove('hidden')

          }else if(data[num].author ==='Hector Salamanca'){
            document.getElementById('HECT').classList.remove('hidden')

          }else if(data[num].author ==='Walter Jr.'){
            document.getElementById('WJ').classList.remove('hidden')

          }else{
          // document.querySelector('#WW').classList.add('hidden')
          }

      })
      .catch(err => {
          console.log(`error ${err}`)
      });      

}




