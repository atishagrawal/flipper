import 'package:flipper/generated/l10n.dart';
import 'package:flipper/routes/router.gr.dart';
import 'package:flipper/util/HexColor.dart';
import "package:flutter/material.dart";
import "package:flutter/widgets.dart";

class AfterSplash extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Wrap(
        children: <Widget>[
          AspectRatio(
            aspectRatio: 2 / 2,
            child: Container(
              color: HexColor("#955be9"),
              child: Column(
                children: <Widget>[
                  Container(
                    height: 80,
                  ),
                  Container(
                    height: 60,
                    child: Image.asset("assets/graphics/logo.png"),
                  ),
                  Container(
                    height: 40,
                  ),
                  Text(
                    S.of(context).flipperPointofSale,
                    style: TextStyle(color: Colors.white, fontSize: 40),
                  ),
                  Text(
                    S.of(context).interactandgrowyourbusiness,
                    style: TextStyle(color: Colors.white, fontSize: 20),
                  )
                ],
              ),
            ),
          ),
          AspectRatio(
            aspectRatio: 2 / 2,
            child: Container(
              color: Colors.white,
              child: Column(
                children: <Widget>[
                  Container(
                    height: 20,
                  ),
                  Container(
                    color: Colors.blue,
                    child: SizedBox(
                      width: 380,
                      height: 60,
                      child: FlatButton(
                        onPressed: () {
                          Router.navigator.pushNamed(Router.signUpScreen);
                        },
                        color: Colors.blue,
                        child: Text(
                          S.of(context).createAccount,
                          style: TextStyle(color: Colors.white),
                        ),
                      ),
                    ),
                  ),
                  Container(
                    height: 20,
                  ),
                  Container(
                    color: Colors.white,
                    child: SizedBox(
                      width: 380,
                      height: 60,
                      child: OutlineButton(
                        color: Colors.blue,
                        child: Text(
                          S.of(context).signIn,
                          style: TextStyle(color: Colors.blue),
                        ),
                        onPressed: () {},
                      ),
                    ),
                  ),
                  Container(
                    height: 10,
                  ),
                  Container(
                    color: Colors.white,
                    child: SizedBox(
                      width: 380,
                      height: 60,
                      child: FlatButton(
                        child: Text(
                          S.of(context).learnaboutFlipper,
                          style: TextStyle(color: Colors.black54, fontSize: 20),
                        ),
                        onPressed: () {},
                      ),
                    ),
                  )
                ],
              ),
            ),
          )
        ],
      ),
    );
  }
}