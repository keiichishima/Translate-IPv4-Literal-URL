# Translate IPv4 Literal URL Extension

## What is this?
This Safari extension is a support tool for [[draft-osamu-v6ops-ipv4-literal-in-url](https://datatracker.ietf.org/doc/draft-osamu-v6ops-ipv4-literal-in-url/)].  When a user try to follow a URL including IPv4 literal address in its address part, the extension appends a special domain name so that DNS64 name service can resolve the address to an appropriate IPv6 address alternative.

## Install

Download the latest extension package from [[Translate-IPv4-Literal-URL.safariextz](https://github.com/keiichishima/Translate-IPv4-Literal-URL/blob/master/Translate-IPv4-Literal-URL.safariextz)] and install it.

## Settings

The Translate IPv4 Literal URL Extension has one configuration parameter that specifies the special domain name to be replaced with the IPv4 literal address. As this time of writing (2014-12), there is no standard way to determine the domain name to represent IPv4 literal addresees in URLs, you need to specify the domain part manually.
