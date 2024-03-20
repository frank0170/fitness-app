import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-web";
import BackArrowIcon from "../../icons/BackArrowIcon.js";
import SettingsButton from "../../icons/SettingsButton.js";
import icon from "./../../public/icon.png";
import PhotoCircle from "./../../icons/PhotoCircle.js";
import { ProfileStyles } from "./profileStyles";
import Weight from "../../icons/Weight.js";
import Height from "../../icons/Height.js";
import Age from "../../icons/Age.js";
import Subscription from "../../icons/Subscription.js";
import UpgradePremium from "../../icons/UpgradePremium.js";
import EditProfile from "../../icons/EditProfile.js";
import SubIcon from "../../icons/SubIcon.js";
import InviteFriends from "../../icons/InviteFriends.js";
import AboutIcon from "../../icons/AboutIcon.js";
import TermsIcon from "../../icons/TermsIcon.js";
import LogOutIcon from "../../icons/LogOutIcon.js";
import RightArrow from "../../icons/RightArrow.js";
import PhotoCamera from "../../icons/PhotoCamera.js";
import Folder from "../../icons/Folder.js";
import DeleteRed from "../../icons/DeleteRed.js";
import EditPhoto from "../../icons/EditPhoto.js";
import ProBox from "../../icons/ProBox.js";

const EditPhotoBox = () => {
  <View style={{ backgroundColor: "#24262B", width: 326, height: 335 }}>
    <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight: 600 }}>
      Change Your Picture
    </Text>

    <TouchableOpacity>
      <PhotoCamera />
      <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: 400 }}>
        Take a photo
      </Text>
    </TouchableOpacity>

    <TouchableOpacity></TouchableOpacity>
    <Folder />
    <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: 400 }}>
      Choose from your file
    </Text>
    <TouchableOpacity></TouchableOpacity>

    <TouchableOpacity></TouchableOpacity>
    <DeleteRed />
    <Text style={{ color: "#E53935", fontSize: 18, fontWeight: 400 }}>
      Delete photo
    </Text>
    <TouchableOpacity></TouchableOpacity>
  </View>;
};

const Profile = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#111214",
      }}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={{
          backgroundColor: "#24262B",
          borderRadius: 32,
          top: "-4%",
          height: "20%",
        }}
      >
        <View
          style={{ flexDirection: "row", alignContent: "center", top: "40%" }}
        >
          <TouchableOpacity style={[ProfileStyles.photoBox, { left: "10%" }]}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BackArrowIcon />
            </View>
          </TouchableOpacity>

          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 20,
              fontWeight: 600,
              left: "35%",
            }}
          >
            Profile
          </Text>

          <TouchableOpacity style={[ProfileStyles.photoBox, { left: "58%" }]}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SettingsButton />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ left: "35%", height: 110, width: 110, top: "-10%" }}>
        <PhotoCircle />
        <Image />
      </View>

      <TouchableOpacity
        style={{ top: "-13%", justifyContent: "center", left: "55%" }}
      >
        <EditPhoto />
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 20,
          fontWeight: 600,
          color: "#FFFFFF",
          left: "30%",
          top: "-10%",
        }}
      >
        FName + Lname
      </Text>
      <Text
        style={{
          fontSize: 11,
          fontWeight: 400,
          color: "#AAAAAA",
          left: "45%",
          top: "-10%",
        }}
      >
        email
      </Text>

      <View style={{ flexDirection: "row", top: "-8%" }}>
        <View
          style={[ProfileStyles.box, { left: "5%", flexDirection: "column" }]}
        >
          <View
            style={{
              flexDirection: "row",
              top: "20%",
              left: "15%",
              alignItems: "center",
            }}
          >
            <Weight />
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 11,
                fontWeight: 500,
                left: "10%",
              }}
            >
              Weight
            </Text>
          </View>

          <View style={{ flexDirection: "row", top: "30%", left: "15%" }}>
            <Text style={{ color: "#FFFFFF" }}>70 </Text>
            <Text style={{ color: "#888888" }}>kg</Text>
          </View>
        </View>

        <View
          style={[ProfileStyles.box, { left: "9%", flexDirection: "column" }]}
        >
          <View
            style={{
              flexDirection: "row",
              top: "20%",
              left: "15%",
              alignItems: "center",
            }}
          >
            <Height />
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 11,
                fontWeight: 500,
                left: "10%",
              }}
            >
              Height
            </Text>
          </View>

          <View style={{ flexDirection: "row", top: "30%", left: "15%" }}>
            <Text style={{ color: "#FFFFFF" }}>170 </Text>
            <Text style={{ color: "#888888" }}>cm</Text>
          </View>
        </View>

        <View
          style={[ProfileStyles.box, { left: "13%", flexDirection: "column" }]}
        >
          <View
            style={{
              flexDirection: "row",
              top: "20%",
              left: "15%",
              alignItems: "center",
            }}
          >
            <Age />
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 11,
                fontWeight: 500,
                left: "10%",
              }}
            >
              Age
            </Text>
          </View>

          <View style={{ flexDirection: "row", top: "30%", left: "15%" }}>
            <Text style={{ color: "#FFFFFF" }}>22 </Text>
            <Text style={{ color: "#888888" }}>years</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={[
          ProfileStyles.orangeBox,
          {
            top: "-5%",
            left: "5%",
            alignContent: "center",
            flexDirection: "row",
          },
        ]}
      >
        <View style={{ top: "-10%", left: "5%" }}>
          `` <UpgradePremium />
        </View>

        <View style={{ flexDirection: "column", left: "10%", top: "20%" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <ProBox />
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 16,
                fontWeight: 600,
                left: "5%",
              }}
            >
              Upgrade to Premium
            </Text>
          </View>
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 10,
              fontWeight: 400,
              top: "5%",
            }}
          >
            Enjoy workout access without any limits
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          ProfileStyles.greyBox,
          { top: "-7%", flexDirection: "row", alignContent: "center" },
        ]}
      >
        <EditProfile style={{ paddingLeft: 17, paddingRight: 17 }} />
        <Text style={{ color: "#FFFFFF", fontSize: 14, fontWeight: 500 }}>
          Edit Profile
        </Text>
        <View style={{ right: "-49%" }}>
          <RightArrow />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          ProfileStyles.greyBox,
          { top: "-9%", flexDirection: "row", alignContent: "center" },
        ]}
      >
        <SubIcon style={{ paddingLeft: 17, paddingRight: 17 }} />
        <Text style={{ color: "#FFFFFF", fontSize: 14, fontWeight: 500 }}>
          My Subscription
        </Text>
        <View style={{ right: "-38%" }}>
          <RightArrow />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          ProfileStyles.greyBox,
          { top: "-11%", flexDirection: "row", alignContent: "center" },
        ]}
      >
        <Subscription style={{ paddingLeft: 17, paddingRight: 17 }} />
        <Text style={{ color: "#FFFFFF", fontSize: 14, fontWeight: 500 }}>
          Payment Methods
        </Text>
        <View style={{ right: "-34%" }}>
          <RightArrow />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          ProfileStyles.greyBox,
          { top: "-13%", flexDirection: "row", alignContent: "center" },
        ]}
      >
        <InviteFriends style={{ paddingLeft: 17, paddingRight: 17 }} />
        <Text style={{ color: "#FFFFFF", fontSize: 14, fontWeight: 500 }}>
          Invite Friends
        </Text>
        <View style={{ right: "-43%" }}>
          <RightArrow />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          ProfileStyles.greyBox,
          { top: "-15%", flexDirection: "row", alignContent: "center" },
        ]}
      >
        <AboutIcon style={{ paddingLeft: 17, paddingRight: 17 }} />
        <Text style={{ color: "#FFFFFF", fontSize: 14, fontWeight: 500 }}>
          About Us
        </Text>
        <View style={{ right: "-52%" }}>
          <RightArrow />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          ProfileStyles.greyBox,
          { top: "-17%", flexDirection: "row", alignContent: "center" },
        ]}
      >
        <TermsIcon style={{ paddingLeft: 17, paddingRight: 17 }} />
        <Text style={{ color: "#FFFFFF", fontSize: 14, fontWeight: 500 }}>
          Terms and Conditions
        </Text>
        <View style={{ right: "-27%" }}>
          <RightArrow />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          ProfileStyles.whiteBox,
          {
            top: "-15%",
            left: "5%",
            alignContent: "center",
            justifyContent: "center",
          },
        ]}
      >
        <LogOutIcon style={{ paddingTop: 16 }} />
        <Text
          style={{
            paddingTop: 16,
            color: "#111214",
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          Log Out
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default Profile;
