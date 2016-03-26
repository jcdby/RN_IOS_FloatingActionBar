# RN_IOS_FloatingActionBar
众所周知，在IOS里面没有提供像安卓那样的build-in的浮动按钮，所以要想在IOS里面拥有浮动按钮功能的话，得必须自己实现，很费时费力。
我们公司里面所开发的项目，就需要在IOS里面实现一个浮动按钮。我们公司里面一个拥有多年IOS开发经验的前辈说，自己在IOS里面来实现浮动按钮功能的话，要花个好几天来实现。
现在，利用React Native的FlexBox的特性，只需要几行代码，就能轻松实现浮动按钮。


```
render() {
    return (
      <View style={{flex: 1}}>
        <ListView style={{flex: 1000}}dataSource={this.state.datasource} renderRow=   {(rowData) => <Text>{rowData}
        </Text>}/>
        <View style={{flex: 1,top: -60, alignSelf: 'flex-end', justifyContent: 'center', alignItems: 'center'}}>
          <TouchableHighlight style={{ backgroundColor: 'red', width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center', margin: 20}} onPress={()=>{console.log('touched');}}  >
            <Text>
              +
            </Text>
          </TouchableHighlight>
        </View>
      </View>

    );
  }
```



在上面的代码中，视图的结构如下

                             <View>
                               |
                     -----------------------
                     |                     |
                 <ListView>              <View>
                                            |                               
                                   <TouchableHighlight/>
                                            |
                                          <Text>
在这个结构中，第一层的view的flex属性为1，使其充满整个屏幕，默认的flex方向为column， 在这个view里，放下了两个view，一个是ListView，一个是View， 属于linear，平行排在一个页面。他们在第一层view所占的比列为他们自己的flex属性比。例如，他们的的flex的值都为1的话，他们各自将在第一层的view内各占一半的空间，为了让Listview尽可能充满整个屏幕，在这里，我让他们的flex比为1000/1001（ListView），和1/1001（View），1001为ListView和View的flex值之和（分母越大，第二层View所占比列就越可以忽略不计），也就是我们将第一层view分了1001份，ListView占1000份，View占1份（在这里，还可以将listview的flex设置为1，而view的flex值设置为0.001）。ListView的flex值越大，第二层的view在屏幕所占的空间就可以几乎忽略不计。为什么要在第二层放上一个view呢？目的是为了有空间绘制这个浮动按钮，并且这个浮动按钮能与ListView互不影响对方接受event。

好，通过上面的步骤，我给浮动按钮留下了绘制空间。RN有一个很有趣的绘制原理， 就是后绘制的视图组件会压在先绘制的视图组件之上。利用这个原理，我在第二层的view里面放置了一个<TouchableHighLight>组件，由于他比其他的组件都要后绘制上去，所以给它设置一个比第二层的height高的一个height值时，它就会被绘制在最上面，在上面的代码中，我给了它一个分别50的height 和width值。但若是只是这样设置的话，它只会被显示一半出来，剩下的一半被挡在了窗口外面，所以为了让他完全被显示出来，我给它的top设置了一个负值，这样它就会出现在它自己容器的外边，也就是第二层view的上面。

在这里例子里面，我利用了flex的特性，绘制出了一个浮动的按钮，并且这个按钮并不会影响listview的任何事件，listview也不会影响这个按钮。同样，利用这个flex的特性和绘制原理，我们还可以做出安卓里面的DrawerLayout那样的从右边屏幕或者左边屏幕划出的菜单来。等以后有时间，在做出DrawerLayout的代码。
