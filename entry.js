
if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined') {
    console.log('test');
} else {
    $RefreshReg$ = () => { 
        console.log("yey2");
    };
    $RefreshSig$ = () => type => type;
}