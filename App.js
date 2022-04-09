import "react-native-gesture-handler";
import SessionProvider from "./context/SessionProvider";

import RootStack from "./root/RootStack";

export default function App() {
  return (
    <SessionProvider>
      <RootStack />
    </SessionProvider>
  );
}
