import * as pulumi from "@pulumi/pulumi";
import {Unwrap} from '@pulumi/pulumi'


type Artefact =  {
    name: string
    lastModified: Date
}

function test(artefact: Artefact) {}

const artefact: Artefact = { name: 'test', lastModified: new Date() }
pulumi.output(artefact).apply((a: Unwrap<Artefact>) => test(a))
