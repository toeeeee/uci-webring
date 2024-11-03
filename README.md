# A webring for computer science students at UC Irvine. 
***
### Default webring
![image](https://github.com/user-attachments/assets/4f4b357a-e321-4647-a3ca-e6e4551fe53d)

### Joining the webring
To join, make a pull request to webring.json and add an entry in the format of 
```json
{
  "name": "John Doe",
  "url": "https://www.pleaseincludehttpsandwww.com",
  "owner": "Mary Sue",
  "year": 2026
}
```

### HTML
Once approved, add the following code to your website (with the sitename changed) to add the webring to your website. 

```html
    <div>
      <script type="text/javascript" src="https://combinatronics.com/toeeeee/uci-webring/refs/heads/main/makeWidget.js"></script>
      <webring-uci site="anguyen2000.dev">
        blah blah blah.. your website might not be in the ring!
      </webring-uci>
    </div>
```
#### Alternative
```html
    <div>
      <script type="text/javascript" src="/makeWidget.js"></script>
      <webring-uci site="anguyen2000.dev">
        blah blah blah.. your website might not be in the ring!
      </webring-uci>
    </div>
```

I would recommend downloading the makeWidget.js script incase combinatronics goes down + it is much easier to handle the styling there. It might be downright impossible to style a shadow DOM xp

#### yipee!
***
