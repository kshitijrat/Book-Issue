import React, { useEffect } from "react";
import { Card, CardBody } from "reactstrap";
function Header() {
    return (
        <div>
            <Card className="bg-warning">
                <CardBody>
                    <h1 className="my-3">Welcom to Cources Application</h1>
                </CardBody>
            </Card>
        </div>
    );

}
export default Header