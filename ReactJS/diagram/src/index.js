import React, { useState } from 'react';
import ReactDOM, { createPortal } from 'react-dom';
//import style from './Button.css';
import Konva from 'konva';
import { Transformer } from 'konva/lib/shapes/Transformer';



var width = window.innerWidth / 1;
var height = window.innerHeight / 1.7;

var isOnScreen = false;

var stage = new Konva.Stage
(
  {
    container: 'container',
    width: width,
    height: height,
  }
);

stage.container().style.backgroundColor = 'white';
stage.container().style.border = '2px solid black';

var layer = new Konva.Layer();

var box;

function Export(uri, name)
{
  var link = document.createElement('a');
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

document.getElementById('export').addEventListener('click', function()
{
  var dataToURL = stage.toDataURL({pixelRatio: 2});
  Export(dataToURL, 'diagram.png');
})


var tr = new Konva.Transformer();
var squareTr = new Konva.Transformer();
var arrowTr = new Konva.Transformer();


function DrawRectangle()
{
  var Rectangle = new Konva.Rect({
    x: 150,
    y: 40,
    width: 200,
    height: 50,
    fill: 'white',
    stroke: 'black',
    strokeWidth: 4,
    draggable : true,
    shadowBlur: 10,
    cornerRadius: 10,
  });
  box = Rectangle;
  isOnScreen = true;
  layer.add(Rectangle);

  tr = new Konva.Transformer();
      layer.add(tr);
      tr.nodes([box]);
}



function setRectangleColour()
{
  if(isOnScreen)
  {
    var fill = box.fill() == 'red' ? '00d00f': 'red';
    box.fill(fill);
  }
  else
  {
    return;
  }
}

function DrawCircle()
{
  var Circle = new Konva.Circle(
  {
    x: stage.width() / 2,
    y: stage.height() / 2,
    radius: 70,
    fill: 'white',
    stroke: 'black',
    strokewidth: 4,
    draggable: true

  });
  layer.add(Circle);

}

function DrawArrow()
{
  var arrow = new Konva.Arrow(
    {
      x: stage.width() / 4,
      y: stage.height() / 4,
      //points: [0, 0, width / 6, height / 6],
      points: [25, 25, 120, 25],
      pointerLength: 4,
      pointerWidth: 4,
      fill: 'black',
      stroke: 'black',
      strokeWidth: 8,
      draggable: true,
    }
  );

  arrowTr = new Konva.Transformer();
    layer.add(arrowTr);
    arrowTr.nodes([arrow]);

  layer.add(arrow);
}

function DrawSquare()
{
  var Square = new Konva.Rect({
    x: 150,
    y: 40,
    width: 100,
    height: 100,
    fill: 'white',
    stroke: 'black',
    strokeWidth: 4,
    draggable : true,
    shadowBlur: 10,
    cornerRadius: 10,
  });
  squareTr = new Konva.Transformer();
  layer.add(squareTr);
  squareTr.nodes([Square]);
  layer.add(Square);

}

function drawText()
{
  var text = new Konva.Text(
  {
    x: stage.width() / 2,
    y: 15,
    text: 'text',
    fontSize: 40,
    fontFamily: 'Arial',
    fill: 'black',
    draggable: true
  })

  layer.add(text);

}

document.addEventListener('keypress', function(key)
{
  if(key.keyCode == 13){
    alert("You pressed Enter");
    tr.destroy();
  }

  if(key.keyCode == 97){
    alert("You pressed A");
    arrowTr.destroy();
  }

  if(key.keyCode == 98){
    alert("You pressed B")
    squareTr.destroy();
  }

})

function drawLine()
{
  var line = new Konva.Line(
    {
      x: stage.width() / 2,
      y: 15,
      points: [25, 25, 250, 25],
        stroke: 'black',
        strokeWidth: 5,
        lineCap: 'round',
        lineJoin: 'round',
        draggable: true
    }
  )

  layer.add(line);

}

stage.add(layer);

const buttonRectangle = <button onClick={DrawRectangle} style={{backgroundColor:"orange", color:"black", fontWeight:'bold'}}>RECTANGLE</button>
ReactDOM.render(buttonRectangle, document.getElementById('root'));
const buttonCircle = <button onClick={DrawCircle} style={{backgroundColor:"orange", color:"black", fontWeight:'bold'}}>CIRCLE</button>
ReactDOM.render(buttonCircle, document.getElementById('circle'));
const buttonArrow = <button onClick={DrawArrow} style={{backgroundColor:"orange", color:"black", fontWeight:'bold'}}>ARROW</button>
ReactDOM.render(buttonArrow, document.getElementById('arrow'));

const squarebutton = <button onClick={DrawSquare} style={{backgroundColor:"orange", color:"black", fontWeight:'bold'}}>SQUARE</button>
ReactDOM.render(squarebutton, document.getElementById('square'));

const textButton = <button onClick={drawText} style={{backgroundColor:"orange", color:"black", fontWeight:'bold'}}>TEXT</button>
ReactDOM.render(textButton, document.getElementById('text'));
const lineButton = <button onClick={drawLine} style={{backgroundColor:"orange", color:"black", fontWeight:'bold'}}>LINE</button>
ReactDOM.render(lineButton, document.getElementById('line'));

const exportButton = <button style={{backgroundColor:"cyan", color:"black", fontWeight:'bold'}}>EXPORT</button>
ReactDOM.render(exportButton, document.getElementById('export'));

const buttonDraw = <button onClick={setRectangleColour} style={{backgroundColor:"yellow", color:"black", fontWeight:'bold'}}>SET RECTANGLE COLOUR</button>
ReactDOM.render(buttonDraw, document.getElementById('draw'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals