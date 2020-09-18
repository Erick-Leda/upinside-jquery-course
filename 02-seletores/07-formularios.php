<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>button demo</title>
        <style>
            form{
                background:paleturquoise;
            }
            textarea {
                height: 35px;
            }
            div{
                color:red;
            }
            fieldset{
                margin:0;
                padding: 0;
                border-width: 0;
            }
            .marked{
                background-color: yellow;
                border: 3px red solid;
            }
            input{
                margin-top: 10px;
                margin-bottom: 10px;
                margin-right: 10px;
                margin-left: 10px;
                border: 5px;
                background: lavender;
            }
            .focused{
                background: #abcdef;
            }
        </style>
        
    </head>
    <body>
        
        <form>
            <fieldset>
                <input type="button" value="Input Button">
                <input type="checkbox">
                
                <p>
                    <input type="checkbox" name="roula" value="Hourly" checked="checked">
                </p>
                
                <input name="id" disabled="disabled">
                
                <input type="file">
                <input type="hidden">
                <input type="image">
                
                <input type="password">
                <input type="radio">
                <input type="reset">
                
                <input type="submit">
                <input type="text">
                
                <div id="content">
                    <input tabIndex="1">
                    <select tabIndex="2">
                      <option>select menu</option>
                    </select>
                    <div tabIndex=3>
                      a div
                    </div>
                </div>
                
                <select>
                    <option>Option</option>
                </select>
                <textarea></textarea>
                <button>Botão</button>
            </fieldset>
        </form>      
        <div id="messages"></div>
        
        <script src="../js/jquery.js"></script>
        <script src="formularios.js"></script>
    </body>
</html>
