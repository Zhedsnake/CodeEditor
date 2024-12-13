import React, { useState, useEffect } from 'react';
import clsx from "clsx";
import { Container, Dropdown, DropdownButton, Button } from 'react-bootstrap';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/python/python';
import('codemirror/mode/go/go')
import classes from '../components/UI/CssModules/Home.module.css';
import useHandleCodeExecution from "../hooks/useHandleCodeExecution.tsx";
import Loader from "../components/UI/Loader.tsx";

const Home: React.FC = () => {
    const [language, setLanguage] = useState('python');
    const [code, setCode] = useState('print("Hello, world!")');
    const [outputValue, setOutputValue] = useState('');

    // print("Hello, world!")
    // fmt.Println("Hello, world!")

    const codeEditor = useHandleCodeExecution();

    useEffect(() => {
        if (codeEditor.result) {
            console.log("codeEditor.result:", codeEditor.result);

            setOutputValue(codeEditor.result);
        } else if (codeEditor.error) {
            console.log("codeEditor.error:", codeEditor.error);

            setOutputValue(codeEditor.error);
        }
    }, [codeEditor.result, codeEditor.error]);

    const handleRunCode = async () => {
        await codeEditor.handleExecuteCode(language, code);
    };

    return (
        <Container className={clsx('bg-dark', 'p-4', 'p-lg-5', classes.homeContainer)}>
            <div className="d-flex justify-content-between mb-3">
                <DropdownButton
                    id="language-selector"
                    title={`Language: ${language}`}
                    onSelect={(lang) => setLanguage(lang || 'python')}
                >
                    <Dropdown.Item eventKey="python">Python</Dropdown.Item>
                    <Dropdown.Item eventKey="go">Go</Dropdown.Item>
                </DropdownButton>
                <Button variant="success" onClick={handleRunCode}>
                    Run
                </Button>
            </div>

            <div className="mb-4">
                <textarea
                    className="form-control"
                    value={"Напишите функцию, которая выведет в консоль сообщение Hello, world!."}
                    readOnly
                />
            </div>

            <div className="mb-3">
                <CodeMirror
                    value={code}
                    options={{
                        mode: language,
                        theme: 'material',
                        lineNumbers: true,
                    }}
                    onBeforeChange={(editor, data, value) => {
                        setCode(value);
                    }}
                />
            </div>

            <div>
                {codeEditor.loading ? (
                    <Loader />
                ) : (
                    <textarea
                        className={clsx('form-control')}
                        value={outputValue}
                        readOnly
                        placeholder="Output will appear here"
                    />
                )}
            </div>
        </Container>
    );
};

export default Home;
