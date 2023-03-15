import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import SafeViewAndroid from '../components/androidSafeArea/SafeViewAndroid';
import Button from '../components/button/Button';
import { colors } from '../theme/colors';
import Text from '../components/text/Text';
import { images } from '../theme/images';
import { metrics } from '../theme/metrics';

export default function DesignPortfolio() {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <ScrollView>
        <View>
          <Button
            customStyles={{ alignSelf: 'flex-end' }}
            title="Free Consultation"
          />
        </View>
        <View style={styles.Quadrilateral}></View>
        <View style={styles.circle}></View>
        <View>
          <Text preset="headingXl" customStyles={styles.title}>
            Design solutions made easy
          </Text>
          <Text preset="body" customStyles={styles.subTitle}>
            With over ten years of experience in various design disciplines, I’m
            your one-stop shop for your design needs.
          </Text>
        </View>
        <View>
          <Image style={styles.images_1} source={images.images_1} />
        </View>
        <View style={styles.flexImages}>
          <Image style={styles.images_2} source={images.images_2} />
          <Image style={styles.images_2} source={images.images_3} />
        </View>

        <View>
          <Image style={styles.images} source={images.images_4} />
        </View>
        <View>
          <Image style={styles.images} source={images.images_5} />
        </View>
        <View>
          <Image style={styles.images} source={images.images_6} />
        </View>
        <View>
          <Image style={styles.profile_img} source={images.profile_images} />
        </View>
        <View>
          <Text preset="headingXl" customStyles={styles.title}>
            I’m Amy, and I’d love to work on your next project
          </Text>
          <Text preset="body" customStyles={styles.subTitle}>
            I love working with others to create beautiful design solutions.
            I’ve designed everything from brand illustrations to complete mobile
            apps. I’m also handy with a camera!
          </Text>
          <View>
            <Button
              customStyles={{
                alignSelf: 'center',
                marginTop: metrics.spacing.l,
                backgroundColor: colors.lightRed,
                borderRadius: 30,
              }}
              title="Free Consultation"
            />
          </View>
        </View>

        <View>
          <Text
            preset="headingXl"
            customStyles={{ alignSelf: 'center', marginTop: 20 }}
          >
            My Work
          </Text>
          <View>
            <Image style={styles.images} source={images.images_7} />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              gap: 20,
              marginTop: 25,
            }}
          >
            <View
              style={{
                backgroundColor: colors.black,
                width: 50,
                height: 50,
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
              }}
            >
              <Image style={{}} source={images.icons_1} />
            </View>
            <View
              style={{
                backgroundColor: colors.black,
                width: 50,
                height: 50,
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
              }}
            >
              <Image style={{}} source={images.icons_2} />
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: colors.black,
            marginHorizontal: 4,
            borderRadius: 10,
            marginTop: 50,
          }}
        >
          <Text
            preset="headingXl"
            customStyles={{
              color: colors.white,
              textAlign: 'center',
              marginHorizontal: 3,
              padding: 10,
            }}
          >
            Book a call with me
          </Text>
          <Text
            preset="body"
            customStyles={{
              color: colors.white,
              textAlign: 'center',
              marginHorizontal: 3,
              padding: 6,
            }}
          >
            I’d love to have a chat to see how I can help you. The best first
            step is for us to discuss your project during a free consultation.
            Then we can move forward from there.
          </Text>
          <View>
            <Button
              customStyles={{
                alignSelf: 'center',
                marginTop: metrics.spacing.l,
                backgroundColor: colors.lightRed,
                borderRadius: 30,
              }}
              title="Free Consultation"
            />
          </View>
        </View>
        <View>
          <Button
            customStyles={{ alignSelf: 'flex-end', marginTop: 30 }}
            title="Free Consultation"
          />
        </View>
        <View>
          <View style={styles.Quadrilateral_2}></View>
          <View style={styles.circle_2}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Quadrilateral: {
    position: 'absolute',
    top: 10,
    left: 20,
    height: 60,
    width: 60,
    backgroundColor: colors.black,
    borderWidth: 1,
  },
  circle: {
    position: 'absolute',
    left: 35,
    height: 30,
    width: 30,
    borderRadius: 60,
    borderColor: colors.lightCream,
    borderWidth: 3,
    top: 25,
  },
  title: {
    textAlign: 'center',
    marginTop: 15,
    marginHorizontal: 4,
  },
  subTitle: {
    textAlign: 'center',
    marginHorizontal: 10,
    marginTop: 25,
  },
  images_1: {
    width: 300,
    height: 300,
    marginTop: metrics.spacing.m,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  images_2: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  flexImages: {
    flexDirection: 'row',
    marginTop: metrics.spacing.m,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  images: {
    width: 300,
    height: 150,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10,
  },

  profile_img: {
    alignSelf: 'center',
    marginTop: 50,
  },
  Quadrilateral_2: {
    // position: 'absolute',
    top: 5,
    left: 20,
    height: 60,
    width: 60,
    backgroundColor: colors.black,
    borderWidth: 1,
  },
  circle_2: {
    // position: 'absolute',
    // left: 35,
    // height: 30,
    // width: 30,
    // borderRadius: 60,
    // borderColor: colors.lightCream,
    // borderWidth: 3,
    // top: 10,
  },
});
