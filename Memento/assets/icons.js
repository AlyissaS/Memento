import { AntDesign, Feather } from "@expo/vector-icons";
import {QuestionOutlined} from '@ant-design/icons';

export const icons = {
    dashboard: (props)=> <AntDesign name="home" size={26} {...props} />,
    memories: (props)=> <Feather name="camera" size={26} {...props} />,
    chat: (props)=> <Feather name="message-circle" size={26} {...props} />,
    questions: (props)=> <AntDesign name="question" size={26} {...props} />,
}