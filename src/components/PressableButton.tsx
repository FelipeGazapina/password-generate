import { Pressable } from "react-native";

interface PressableButtonProps {
    onPress: () => void;
    children: React.ReactNode;
}
export function PressableButton({ onPress, children }: PressableButtonProps) {
    return (
        <Pressable onPress={onPress}>
            {children}
        </Pressable>
    )
}